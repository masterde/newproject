handlebars = require('handlebars');
var layouts = require('handlebars-layouts');
layouts.register(handlebars);
var moreHelpers = require('handlebars-helpers');
var html = moreHelpers.html();
var object = moreHelpers.object();
module.exports = handlebars.helpers
