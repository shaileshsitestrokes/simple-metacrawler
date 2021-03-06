Package.describe({
  summary: 'Simple server method that finds images, page name and description from an url',
  version: '0.2.8',
  git: 'https://github.com/bitomule/simple-metacrawler.git',
  name: "bitomule:simple-metacrawler"
});

Npm.depends({
    'cheerio': '0.22.0',
    'request': '2.75.0',
    'iconv': '2.2.1'
});

Package.on_use(function (api) {
    api.versionsFrom("1.0.1");
    api.use(["meteorhacks:async@1.0.0"]);
	api.add_files('server/crawler.js', ['server']);
});
