This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Dev directory

This is a quickly hacked together static website that is meant to be easily updated via pull requests to this repo.

After reading the rules please feel free to make pull requests or open issues.

## Rules

To add new items to an existing directory you must follow this format, all fields are mandatory (use "Unknown" if unsure):

```
{
  "name": "",
  "url": "",
  "prog_lang": "",
  "language": "",
  "topic": "",
  "subtopic": "",
  "tech": "",
  "type": ""
}
```
To add an entirely new directory (a new JSON file) you must follow this format in addition to importing it in App.js and adding it to the initial state:
```
[
  {
    "name": "",
    "url": "",
    "prog_lang": "",
    "language": "",
    "topic": "",
    "subtopic": "",
    "tech": "",
    "type": ""
  },
  {
    "name": "",
    "url": "",
    "prog_lang": "",
    "language": "",
    "topic": "",
    "subtopic": "",
    "tech": "",
    "type": ""
  },  
  ...
]
```
AND all strings must start with a capital letter (it looks nicer) except for the URL.

## Folder Structure

After creation, your project should look like this:

```
<your-app-name>/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    Category.js
    index.css
    index.js
    Item.js
    lists/
      ...json
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
I added Jest and the --coverage flag.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
