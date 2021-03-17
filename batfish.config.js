const webpack = require('webpack');
const mapboxAssembly = require('@mapbox/mbx-assembly');
const path = require('path');
const posthtml = require('posthtml');
const apiNavigation = require('./docs/data/api-navigation');
const { buildApiSearch } = require('./docs/util/build-api-search');
const {
    mbxTaggerBatfish
} = require('@mapbox/remark-lint-mapbox/frontmatter/mbx-tagger-batfish');
const {
    buildNavigation,
    buildFilters
} = require('@mapbox/dr-ui/helpers/batfish/index.js');
const {
    renderIframe,
    renderCopiableCode
} = require('./docs/components/example-utils.js');
const { productionToken } = require('./scripts/mapbox-shell-token.js');

const addPages = [
    {
        title: 'Tutorials',
        path: 'https://docs.mapbox.com/help/tutorials?product=Mapbox+GL+JS',
        navOrder: 5
    },
    {
        title: 'Troubleshooting',
        path:
            'https://docs.mapbox.com/help/troubleshooting?product=Mapbox+GL+JS',
        navOrder: 6
    }
];

const siteBasePath = '/mapbox-gl-js';
module.exports = () => {
    const config = {
        siteBasePath: siteBasePath,
        siteOrigin: 'https://docs.mapbox.com',
        pagesDirectory: `${__dirname}/docs/pages`,
        outputDirectory: path.join(__dirname, '_site'),
        postcssPlugins: mapboxAssembly.postcssPipeline.plugins,
        productionDevtool: 'source-map',
        stylesheets: [
            require.resolve('@mapbox/mbx-assembly/dist/assembly.css'),
            require.resolve('@mapbox/dr-ui/css/docs-prose.css'),
            `${__dirname}/docs/components/site.css`,
            require.resolve('@mapbox/dr-ui/css/prism.css'),
            `${__dirname}/vendor/docs-page-shell/page-shell-styles.css`
        ],
        applicationWrapperPath: `${__dirname}/docs/components/application-wrapper.js`,
        webpackLoaders: [
            /* 
            This loader is responsible for generating:
              1. The copiable code for each example. 
              2. The iframe demo for each code example.
            */
            {
                test: /\.html$/,
                oneOf: [
                    /* generates the example's copiable code  */
                    {
                        resourceQuery: /code/, // example: simple-map.html?code
                        use: [
                            {
                                loader: 'html-loader',
                                options: {
                                    minimize: false,
                                    preprocessor: (content, loaderContext) => {
                                        let result;
                                        try {
                                            result = posthtml().process(
                                                renderCopiableCode(content),
                                                { sync: true }
                                            );
                                        } catch (error) {
                                            loaderContext.emitError(error);
                                            return content;
                                        }
                                        return result.html;
                                    }
                                }
                            }
                        ]
                    },
                    /* generates the example's iframe demo */
                    {
                        resourceQuery: /iframe/, // example: simple-map.html?iframe
                        use: [
                            // name the iframe file
                            'file-loader?name=[name]-demo.[ext]',
                            'extract-loader',
                            // wrap the html snippet in HTML document and add Mapbox token
                            {
                                loader: 'html-loader',
                                options: {
                                    minimize: true,
                                    preprocessor: (content, loaderContext) => {
                                        let result;
                                        try {
                                            result = posthtml().process(
                                                renderIframe(
                                                    content,
                                                    productionToken
                                                ),
                                                { sync: true }
                                            );
                                        } catch (error) {
                                            loaderContext.emitError(error);
                                            return content;
                                        }
                                        return result.html;
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                test: /@mapbox\/mapbox-gl-style-spec\/expression\/definitions\/index.js$/,
                sideEffects: true
            }
        ],
        ignoreWithinPagesDirectory: ['example/*.html'],
        webpackPlugins: [
            // Make environment variables available within JS that Webpack compiles.
            new webpack.DefinePlugin({
                // DEPLOY_ENV is used in config to pick between local/production.
                'process.env.DEPLOY_ENV': `"${process.env.DEPLOY_ENV}"`
            })
        ],
        inlineJs: [
            {
                filename: `${__dirname}/vendor/docs-page-shell/page-shell-script.js`
            }
        ],
        jsxtremeMarkdownOptions: {
            getWrapper: () => {
                return path.join(__dirname, './docs/components/page-shell.js');
            },
            rehypePlugins: [
                require('rehype-slug'),
                require('@mapbox/rehype-prism'),
                require('@mapbox/dr-ui/plugins/add-links-to-headings'),
                require('@mapbox/dr-ui/plugins/make-table-scroll')
            ]
        },
        dataSelectors: {
            // generate mapbox metadata for every page
            mbxMeta: (data) => mbxTaggerBatfish(data),
            apiSearch: () => buildApiSearch(),
            apiNavigation: () => apiNavigation,
            navigation: (data) =>
                buildNavigation({ siteBasePath, data, addPages }),
            filters: (data) => buildFilters(data)
        },
        includePromisePolyfill: false,
        babelInclude: [
            '@mapbox/mapbox-gl-style-spec' // (removes flow)
        ],
        webpackStaticIgnore: [/util\/util\.js$/],
        sitemap: {
            ignoreFile: 'conf/sitemap-ignore.js'
        }
    };

    // Local builds treat the `dist` directory as static assets, allowing you to test examples against the
    // local branch build. Non-local builds ignore the `dist` directory, and examples load assets from the CDN.
    config.unprocessedPageFiles = ['**/dist/**/*.*', '**/assets/*.js'];
    if (process.env.DEPLOY_ENV !== 'local') {
        config.ignoreWithinPagesDirectory.push('**/dist/**/*.*');
    }

    return config;
};
