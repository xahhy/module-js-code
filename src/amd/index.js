if (typeof define !== 'function') {
    var define = require('requirejs');
}
define.config({
    //By default load any module IDs from js/lib
    baseUrl: '.',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
});

define(['./renderTemplate'], (render)=>{
    render('I am ${firstName},${lastName}', {firstName: 'TW', lastName: 'er'});
});
