Package.describe({
  name: 'oopish:datagrater',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Fine-grained admin UI for managing a Meteor app’s database',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/richplastow/datagrater.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2');
  api.use('ecmascript');

  // api.addAssets([
  // ], 'client');

  //// Cannot use `import { Template } from 'meteor/templating' in package.js. 
  api.use(['templating'], 'client');

  //// Cannot leave off 'index.js' in package.js. 
  api.mainModule('imports-package/startup/client/index.js', 'client');
  api.mainModule('imports-package/startup/server/index.js', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('oopish:datagrater');
  api.mainModule('datagrater-tests.js');
});
