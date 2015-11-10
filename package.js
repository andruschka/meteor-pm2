Package.describe({
  name: 'andruschka:pm2',
  version: '0.1.0',
  // Brief, one-line summary of the package.
  summary: 'PM2 for Meteor. Use PM2 programmatically!',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/andruschka/meteor-pm2.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "pm2":"0.15.10"
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('ecmascript');
  api.addFiles('pm2.js', 'server');
  api.export('pm2');
});
