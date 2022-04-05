const withSass = require("@zeit/next-sass");
module.exports = withSass();

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};
