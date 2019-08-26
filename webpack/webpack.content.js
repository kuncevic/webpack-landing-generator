const data = require('../src/content/' + process.env.CONTENT + '.json');

const Webpack = require('webpack');

module.exports = {
  plugins: [
    new Webpack.DefinePlugin({
      settings: JSON.stringify(data.settings),
      info: JSON.stringify(data.info),
      quotes: JSON.stringify(data.quotes),
      buttons: JSON.stringify(data.buttons),
      sections: JSON.stringify(data.sections)
    })
  ]
};
