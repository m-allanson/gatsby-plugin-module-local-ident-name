const { cssModulesConfig } = require("gatsby-1-config-css-modules");

/**
 * Takes a loader string like:
 *
 * css?modules&minimize&importLoaders=1&localIdentName=[path]---[name]---[local]---[hash:base64:5]&sourceMap
 *
 * and replaces localIdentName's value with newIdent
 *
 * @param {string} loader
 * @param {string} newIdent
 */
const replaceLoaderIdentName = (loader, newIdent) => {
  const defaultConfig = cssModulesConfig("develop");
  // Split loader string out into parts
  const parts = defaultConfig.split("&");

  // Find ident
  const identIndex = parts.findIndex(el => el.startsWith("localIdentName"));
  const ident = parts[identIndex];
  const identParts = ident.split("=");

  // Replace existing ident with new
  const replacedIdent = [identParts[0], "=", newIdent].join("");

  // Join parts back into a string
  const newConfig = parts.map(
    (el, i) => (i === identIndex ? replacedIdent : el)
  );
  return newConfig.join("&");
};

/**
 * Modify the cssModules loader with a new localIdentName
 */
module.exports.modifyWebpackConfig = ({ config, stage }, pluginOptions) => {
  if (stage !== "develop") return config;

  config.loader(`cssModules`, current => {
    const index = current.loaders.findIndex(loader =>
      loader.startsWith("css?")
    );

    const newLoader = replaceLoaderIdentName(
      current.loaders[index],
      pluginOptions.localIdentName
    );

    current.loaders[index] = newLoader;
    return current;
  });

  return config;
};
