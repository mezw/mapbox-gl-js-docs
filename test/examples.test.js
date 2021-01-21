const test = require('tape');
const fs = require('fs');
const path = require('path');
const jsyaml = require('js-yaml');

const readPost = (filename) => {
    const buffer = fs.readFileSync(filename),
        file = buffer.toString('utf8');

    try {
        const parts = file.split(/---\s*[*\n^]/g),
            frontmatter = parts[1];
        return {
            name: filename,
            file,
            frontmatter: frontmatter ? jsyaml.safeLoad(frontmatter) : null,
            content: parts[2]
        };
    } catch (err) {
        return new Error(
            `\nCould not read frontmatter, check the syntax of the frontmatter: ${filename}`
        );
    }
};

const listExamplesMd = (dir) => {
    const files = fs.readdirSync(`${dir}`);
    return files.reduce((arr, file) => {
        if (path.extname(file) === '.md') {
            arr.push(`${dir}${file}`);
        }
        return arr;
    }, []);
};

const listExamplesHtml = (dir) => {
    const files = fs.readdirSync(`${dir}`);
    return files.reduce((arr, file) => {
        if (path.extname(file) === '.html') {
            arr.push(`${dir}${file}`);
        }
        return arr;
    }, []);
};

// Test md files
listExamplesMd('./docs/pages/example/')
    .filter((example) => example !== './docs/pages/example/index.md')
    .forEach((example) => {
        const { frontmatter, content } = readPost(example);

        if (frontmatter) {
            test(`Example topics: ${example}`, (t) => {
                t.ok(frontmatter.topics, 'has topics');
                t.end();
            });

            test(`Example description: ${example}`, (t) => {
                const regex = /\[|]|`/g;
                t.ok(
                    !frontmatter.description.match(regex),
                    'description is plain text and does not use markdown'
                );
                t.end();
            });

            test(`Example thumbnail: ${example}`, (t) => {
                t.ok(frontmatter.thumbnail, 'has thumbnail');
                const imagePathSrc = `./docs/img/src/${frontmatter.thumbnail}.png`;
                t.ok(
                    fs.existsSync(imagePathSrc),
                    `example must have an image located at: ${imagePathSrc}`
                );
                t.end();
            });
        }
        test(`Example content: ${example}`, (t) => {
            const hasExampleComponent = content.match(
                /{{{\s?<Example html={html} {...this.props}\s?|\/>\s?}}/gim
            );
            t.ok(
                hasExampleComponent,
                `Content must include: {{ <Example html={html} {...this.props} /> }}`
            );
            const hasLink = content.match(/\[([^[]+)\](\(.*\))/gm);
            t.ok(hasLink, `Content must include a link`);
            t.end();
        });
    });

// Test .html files
listExamplesHtml('./docs/pages/example/').forEach((example) => {
    const file = readPost(example);
    test(`Example: ${example}`, (t) => {
        t.ok(
            !file.file.includes('pk.ey'),
            'do not hardcode access tokens, an access token will be appended automatically'
        );
        t.end();
    });
});
