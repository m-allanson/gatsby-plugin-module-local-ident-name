# gatsby-plugin-module-local-ident-name

Adds support for specifying CSS Modules classnames in Gatsby's development mode

# Install

`yarn add gatsby-plugin-module-local-ident-name`

# How to use

1. Include the plugin in your gatsby-config.js file.
1. Specify a new localIdentName for your class names

```javascript
// in gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-module-local-ident-name`,
    options: {
      localIdentName: "[folder]-[local]-[hash:base64:5]"
    }
  }
]
```