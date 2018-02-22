# gatsby-plugin-module-local-ident-name

Adds support for specifying CSS Modules classnames in [Gatsby](https://www.gatsbyjs.org/)'s development mode. No changes are made to Gatsby's production builds.

# Install

`yarn add gatsby-plugin-module-local-ident-name`

# How to use

1. Include the plugin in your `gatsby-config.js` file.
2. Specify a new `localIdentName` for your class names
3. Want to include SASS files? Set `includeSASS` to true

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-module-local-ident-name`,
    options: {
      localIdentName: "[folder]-[local]-[hash:base64:5]",
      includeSASS: true //default false
    }
  }
]
```

See the [loader-utils docs](https://github.com/webpack/loader-utils#interpolatename) for a list of valid tokens that can be used in `localIdentName`.

Here's an example of HTML output using Gatsby's default CSS Modules config:

![default classes](https://user-images.githubusercontent.com/381801/31286937-98fa8bae-aab7-11e7-95dd-578b2202774e.png)

The same HTML after enabling the plugin with the above config:

![modified classes](https://user-images.githubusercontent.com/381801/31286936-98e503d8-aab7-11e7-911b-66cf7e94e579.png)