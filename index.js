const marked = require('marked');



module.exports = (config = {}) => (plugin) => {

  const { ext, ...options } = config;

  marked.setOptions(options);

  plugin.registerTemplateHelper('markdown', (metadata, input) => marked.parse(input));

  plugin.registerRenderer(ext, marked.parse);

}
