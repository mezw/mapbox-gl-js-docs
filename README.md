# Mapbox GL JS Documentation

The source code for the website that hosts [API documentation](#writing-api-documentation) and [examples](#writing-examples) for [Mapbox GL JS](https://github.com/mapbox/mapbox-gl-js).

## Requirements

* Node 12
* npm 6

If you're not sure if your Node and NPM versions are up to date, run `nvm use` before installing dependencies. If you don't have NVM installed, you can [find installation instructions here](https://github.com/nvm-sh/nvm/blob/master/README.md#installing-and-updating).

## Setting up the Development Environment

After cloning this repository, run:

```bash
npm ci # install dependencies with npm
git submodule update --init # initialize mapbox-gl-js git submodule
```

When pulling in new commits that change the `mapbox-gl-js` submodule,
run `git submodule update` to update the local copy as well.

## Writing API Documentation

API documentation is written as [JSDoc comments](http://usejsdoc.org/) and processed with [documentationjs](http://documentation.js.org/) **in the source code of [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js)**. This repository fetches the source code through a git submodule.

* Classes, methods, events, and anything else in the public interface must be documented with JSDoc comments. Everything outside of the public interface may be documented and must be tagged as `@private`.
* Text within JSDoc comments may use markdown formatting. Code identifiers must be surrounded by \`backticks\`.
* Documentation must be written in grammatically correct sentences ending with periods.
* Documentation must specify measurement units when applicable.
* Documentation descriptions must contain more information than what is obvious from the identifier and JSDoc metadata.
* Class descriptions should describe what the class *is*, or what its instances *are*. They do not document the constructor, but the class. They should begin with either a complete sentence or a phrase that would complete a sentence beginning with "A `T` is..." or "The `T` class is..." Examples: "Lists are ordered indexed dense collections." "A class used for asynchronous computations."
* Function descriptions should begin with a third person singular present tense verb, as if completing a sentence beginning with "This function..." If the primary purpose of the function is to return a value, the description should begin with "Returns..." Examples: "Returns the layer with the specified id." "Sets the map's center point."
* `@param`, `@property`, and `@returns` descriptions should be capitalized and end with a period. They should begin as if completing a sentence beginning with "This is..." or "This..."
* Functions that do not return a value (return `undefined`), should not have a `@returns` annotation.
* Member descriptions should document what a member represents or gets and sets. They should also indicate whether the member is read-only.
* Event descriptions should begin with "Fired when..." and so should describe when the event fires. Event entries should clearly document any data passed to the handler, with a link to MDN documentation of native Event objects when applicable.

## Writing Examples

Examples are written as [Batfish](https://github.com/mapbox/batfish) pages in `docs/pages/example`. Each example requires two files: an `.html` file containing the source
code for the example, and a `.js` file containing example boilerplate and front matter. The front matter should include the following items:

* `title`: A short title for the example in **sentence case** as a **verb phrase** using plain language (ie, no method names).
* `description`: A description of the example beginning with the signal phrase `This example...` using plain language (ie, no method names), followed by some technical description, including links to pages on `docs.mapbox.com`, describing specifically how the example is using Mapbox GL JS to achieve the outcome described in the first sentence. This description will appear alongside a thumbnail and title on the example page.
* `topics`: An array of topics for the example, see `docs/data/topics.json` for a list of topics.
* `thumbnail`: The filename of the example's thumbnail image (without the file extension).
* `contentType: example`: Set the contentType to equal example.

In content area of the markdown page include an extended description of the example and add links to documentation or other important resources where possible.

In the `.html` file, write the HTML and JavaScript constituting the example.

* Do **not** include an access token in the example code. The access token will be inserted automatically by the template, using the current logged in user's default public token, or a placeholder `<insert token here>` string if the user is not logged in.
* Do **not** use custom styles from your personal account. Use only the default `mapbox` account styles.
* On commit, Prettier will format the code for all files, including HTML.

Every example **must** have an accompanying image. To get an image, run the site locally and take a screenshot of the rendered map in the example:

1. Run `npm run create-image <example-file-name> <mapbox-access-token>`. The script will take a screenshot of the map in the example and save it to `docs/img/src/`. Commit the image.
2. Run `npm start` to verify that your example image is loading as expected.

???? If `npm run create-image` does not generate an ideal image. You can also take a screenshot of it yourself by running the site locally with `npm start` and taking a screenshot of the example map in PNG format. Resize it to 1200 x 500 pixels and save it in the `docs/img/src` folder.

## Running the Documentation Server Locally

To start a documentation server locally, run:

```bash
npm start
```

The command will print the URL you can use to view the documentation.

???? If you receive an error related to `@mapbox/appropriate-images`, try `nvm use && npm start`.

???? https://github.com/mapbox/mapbox-gl-js/issues/10349
ansis commented on 6 Feb 2021
We only host the documentation for the latest version

We haven't removed any APIs since v1.13.0 so anything in that version should be documented on the site. Some new functionality has been added but unfortunately it isn't labelled. In general, if it isn't related to 3D terrain it probably existed in v1.13.0.

But it's also possible to build the v1.12 docs locally from https://github.com/mapbox/mapbox-gl-js-docs/tree/533acd5385be25a4b82b2cf458c2ce5b579911ac

The process should look something like this (I didn't test it):

git clone git@github.com:mapbox/mapbox-gl-js-docs.git
cd mapbox-gl-js-docs
git checkout 533acd5385be25a4b82b2cf458c2ce5b579911ac
npm install
git submodule update --init
npm start
or
nvm use 10 && npm start
# open http://localhost:8080/mapbox-gl-js/api/

???? You can use this repo to preview changes to content in the `mapbox-gl-js` submodule. 
1. To preview changes to the style spec, make your changes to files in the `node_modules` folder, save the files, and then use `npm start` to start the server and view the pages in a web browser. 
1. To preview changes to the main `mapbox-gl-js` source code, make your changes to a file (for example, `mapbox-gl-js/src/ui/marker.js`), save the file, and then use `npm start` to start the server and view the page in a web browser. 
*(Note: You will not be able to commit your changes to files in the `node_modules` folder or to `mapbox-gl-js` source code files in this repo. You must make your **actual** changes in the [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) repo.)*

The examples section of the locally run documentation will use the GL JS version located in `../mapbox-gl-js/dist`,
so make sure to have a working minified build in your local copy of the `mapbox-gl-js` repo (not the submodule).

## Committing and Publishing Documentation

When a new GL JS release goes out, the release manager will make a PR that updates this repo's `mapbox-gl-js` submodule to point to the new release. When updating the submodule, you may need to run `npm test -- -u` to update Jest snapshots related to the sidebar navigation.

To update or add a new example, PR the relevant changes to this repo. The example will be live once the PR is merged.  If this example uses a version of GL JS that isn't yet released, the PR should not be merged until the release is out.
