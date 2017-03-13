Package.describe({
  summary: 'Fork of percolate & saucecode. w/ updates, timezone, better errors. Define and run scheduled jobs across multiple servers.',
  version: '1.2.11',
  name: 'zeroasterisk:synced-cron',
  git: 'https://github.com/zeroasterisk/meteor-synced-cron.git'
});

Npm.depends({later: '1.2.0', timezone:'1.0.6'});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use(['underscore', 'check', 'mongo', 'logging'], 'server');
  api.addFiles(['synced-cron-server.js'], 'server');
  api.export(['SyncedCron'], 'server');
});

Package.onTest(function(api) {
  api.use(['zeroasterisk:timezoned-synced-cron', 'tinytest']);
  api.addFiles('synced-cron-tests.js', ['server']);
});
