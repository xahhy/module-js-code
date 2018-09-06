define(['./printToConsole'], (printer) => {
    const renderTemplate = (template, model) =>
        printer(Object.keys(model)
            .reduce((acc, key) => acc.replace('${' + key + '}', model[key]), template));
    return renderTemplate;
});
