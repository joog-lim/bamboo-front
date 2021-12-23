const fs = require("fs");

const generatedSitemap = `
User-agent: *
Disallow: 
`;

fs.writeFileSync("../../public/robots.txt", generatedSitemap, "utf8");
