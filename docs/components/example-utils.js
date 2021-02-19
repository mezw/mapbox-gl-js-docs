/* eslint-disable xss/no-mixed-html */
/* 
This file is used in a webpack loader in batfish.config.js 
to generate the copyable code and iframe demo for each example.

If you make changes to this file, you must restart Batfish (npm start) to see your changes.
*/

const viewport = `<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />`;
const css = `body { margin: 0; padding: 0; }
#map { position: absolute; top: 0; bottom: 0; width: 100%; }`;
const { version } = require('../../mapbox-gl-js/package.json');

function urls(options) {
    const prefix =
        options && options.local && process.env.DEPLOY_ENV === 'local'
            ? '/mapbox-gl-js/dist'
            : `https://api.mapbox.com/mapbox-gl-js/v${version}`;
    return {
        css: `${prefix}/mapbox-gl.css`,
        js: `${prefix}/mapbox-gl.js`
    };
}

/* This code is displayed under each example iframe as the copiable code */
/* The <title></title> and (user) access token or place holder is set in example.js */
function renderCopiableCode(html) {
    return `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title></title>
${viewport}
<link href='${urls().css}' rel='stylesheet' />
<script src='${urls().js}'></script>
<style>
${css}
</style>
</head>
<body>
${html}
</body>
</html>`;
}

/* Generates a new HTML file to be used as the `src` in each example iframe */
function renderIframe(html, MapboxAccessToken) {
    return `<!DOCTYPE html>
  <html>
  <head>
  <meta charset=utf-8 />
  <title>Mapbox GL JS example</title>
  ${viewport}
  <meta name='robots' content='noindex, nofollow' />
  <link href='${urls({ local: true }).css}' rel='stylesheet' />
  <script src='https://js.sentry-cdn.com/b4e18cb1943f46289f67ca6a771bd341.min.js' crossorigin='anonymous'></script>
  <script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-instrumentile/v3.0.0/mapbox-gl-instrumentile.js' crossorigin="anonymous"></script>
  <script src='${urls({ local: true }).js}'></script>
  <style>
  ${css}
  </style>
  <script>mapboxgl.accessToken = '${MapboxAccessToken}'</script>
  </head>
  <body>
  ${html}
  </body>
  <script>
    if (window.map instanceof mapboxgl.Map) {
      var i = new instrumentile(map, {
        token: '${MapboxAccessToken}',
        api: 'https://api.tiles.mapbox.com',
        source: 'docs-examples'
      });
    }
  </script>
  </html>`;
}

module.exports = {
    renderCopiableCode,
    renderIframe,
    urls
};
