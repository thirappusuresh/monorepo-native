const projectRoot = __dirname;
const metroConfigHelper = require('react-native-monorepo-helper') 
    .metroConfigHelper;

module.exports = metroConfigHelper(projectRoot)
    .defaultConfig({
        // Add here any extension you may need
        sourceExts: ["js", "jsx"],
    })
    // If you use typescript, this will automatically add all the necessary plugins
    // and common extensions ("ts" and "tsx")
    .typeScript(true) 
    .generate();