const printer = require('./printToConsole');

const renderTemplate = (template, model) =>
  printer(Object.keys(model)
    .reduce((acc, key) => acc.replace('${' + key + '}', model[key]), template));

module.exports = renderTemplate;