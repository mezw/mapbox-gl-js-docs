/* eslint-disable xss/no-mixed-html */

import React from 'react';
import PropTypes from 'prop-types';
import MapWrapper from '@mapbox/dr-ui/map-wrapper';
import CodeSnippet from '@mapbox/dr-ui/code-snippet';
import { highlightHtml } from '@mapbox/dr-ui/highlight/html';
import * as helpers from '@mapbox/dr-ui/edit/helpers';

const { viewport } = require('./example-utils');

export default class ExampleWrapper extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            token: undefined
        };
    }

    componentDidMount() {
        MapboxPageShell.afterUserCheck(() => {
            this.setState({
                token: MapboxPageShell.getUserPublicAccessToken()
            });
        });
    }

    // Add a Mapbox access token (don't bill the user for looking at examples).
    addToken(html) {
        const addMissingTokenComment = this.state.token
            ? ''
            : `\n\t// TO MAKE THE MAP APPEAR YOU MUST\n\t// ADD YOUR ACCESS TOKEN FROM\n\t// https://account.mapbox.com`;

        return html.replace(
            '<script>',
            `<script>${addMissingTokenComment}\n\tmapboxgl.accessToken = '${
                this.state.token || '<your access token here>'
            }';`
        );
    }

    renderSnippet() {
        const { html, location, frontMatter } = this.props;
        // add token and title to copiable code snippet
        const code = this.addToken(html).replace(
            '<title></title>',
            `<title>${frontMatter.title}</title>`
        );
        const parsedCode = helpers.extractor(code);
        return (
            <div className="bg-white mt6">
                <div id="code" className="relative">
                    <CodeSnippet
                        code={code}
                        highlighter={() => highlightHtml}
                        edit={{
                            frontMatter: {
                                ...this.props.frontMatter,
                                pathname: location.pathname
                            },
                            head: viewport,
                            js: parsedCode.js,
                            html: parsedCode.html,
                            css: parsedCode.css,
                            resources: parsedCode.resources
                        }}
                    />
                </div>
            </div>
        );
    }
    render() {
        const { displaySnippet } = this.props;
        return (
            <div className="prose mt18">
                <MapWrapper height={this.props.height}>
                    <Example {...this.props} />
                </MapWrapper>
                {displaySnippet && this.renderSnippet()}
            </div>
        );
    }
}

ExampleWrapper.propTypes = {
    html: PropTypes.string,
    frontMatter: PropTypes.shape({
        title: PropTypes.string.isRequired
    }),
    location: PropTypes.shape({
        pathname: PropTypes.string
    }),
    displaySnippet: PropTypes.bool,
    height: PropTypes.number,
    iframeSrc: PropTypes.string
};

ExampleWrapper.defaultProps = {
    displaySnippet: true,
    height: 400
};

function Example(props) {
    const { height, iframeSrc, frontMatter } = props;
    return (
        <iframe
            id="demo"
            height={height}
            className="w-full block"
            allowFullScreen={true}
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            src={iframeSrc}
            loading="lazy"
            title={`${frontMatter.title} example`}
        />
    );
}

Example.propTypes = {
    frontMatter: PropTypes.shape({
        title: PropTypes.string.isRequired
    }),
    height: PropTypes.number,
    iframeSrc: PropTypes.string
};
