const uswds = require('uswds-gulp');
uswds.paths.dist.css = './dist/css';
uswds.paths.dist.js = './dist/js';
uswds.paths.dist.img = './dist/img';
exports.default = uswds.init;
