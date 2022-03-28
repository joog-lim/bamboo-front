const withSass = require("@zeit/next-sass");
module.exports = withSass();

const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

const intercept = require("intercept-stdout");

// https://github.com/facebookexperimental/Recoil/issues/733
// safely ignore recoil warning messages in dev (triggered by HMR)
function interceptStdout(text) {
  if (text.includes("Duplicate atom key")) {
    return "";
  }
  return text;
}

if (process.env.NODE_ENV === "development") {
  intercept(interceptStdout);
}
