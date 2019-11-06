const content = process.env.CONTENT;
const data = require('../src/content/' + content + '.json');

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
