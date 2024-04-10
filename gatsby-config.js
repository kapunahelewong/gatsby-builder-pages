//  Add path
const path = require('path');

module.exports = {
  siteMetadata: {
    // Keep your site metadata
  },
  // Add the plugin
  plugins: [
    {
      resolve: '@builder.io/gatsby',
      options: {
        // Replace with your Public API Key
        publicAPIKey: "fe07520489dd4741b861fe3c2e19b071",
        templates: {
          // Render every `page` model as a new page using the
          // src/templates/page.jsx template based on the URL provided in Builder.io
          page: path.resolve('src/templates/page.jsx'),
        },
      },
    },
  ],
};