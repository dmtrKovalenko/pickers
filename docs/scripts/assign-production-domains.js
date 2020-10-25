const { execSync } = require('child_process');
const { version } = require('../../lib/package.json');

// dev.pickers.dmtrkovalenko.dev is the automatically deployed for the `next` branch

execSync('now alias dev.pickers.dmtrkovalenko.dev next.pickers.dmtrkovalenko.dev');
execSync(
  `now alias dev.pickers.dmtrkovalenko.dev v${version.replace(/\./g, '-')}.pickers.dmtrkovalenko.dev`
);
