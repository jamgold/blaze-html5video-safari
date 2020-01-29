Package.describe({
  name: 'jamgold:blaze-html5video-safari',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Deal with Mac OS X Safari HTML5 video element in Meteor Blaze',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/jamgold/blaze-html5video-safari', 
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6');
  api.use(['templating@1.0.0', 'ecmascript'], 'client');
  api.mainModule('blaze-html5video-safari.js','client');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('jmangold:blaze-html5video-safari');
//   api.mainModule('blaze-html5video-safari-tests.js');
// });
