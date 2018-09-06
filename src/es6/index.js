const render = require('./renderTemplate');
render('I am ${firstName},${lastName}', {firstName: 'TW', lastName: 'er'});