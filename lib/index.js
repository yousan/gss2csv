'use strict';

var _gssCsvUrl = require('gss-csv-url');

var _gssCsvUrl2 = _interopRequireDefault(_gssCsvUrl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gss_csv_url = new _gssCsvUrl2.default();

(() => {
  // const gss_csv_url = new GSSCSVUrl();
  const url2 = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=374636390';
  console.log(gss_csv_url);
  console.log(gss_csv_url.url(url2));

  // const obj = new GSSCSVUrl();
  // console.log(gss_csv_url.gss_url(url));
  //const obj = new gss_csv_url()
  // console.log(obj.url('abc'))

  const input_url = 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/edit#gid=374636390';
  // const csv_url = chalk.url(input_url);

  // would be 'https://docs.google.com/spreadsheets/d/1yfMIdt8wgBPrMY3UwiCTsX3EN_2gcLCmPAEy8dfYeLY/export?format=csv&gid=374636390'
  console.log(csv_url);
  const url = process.argv[2];
  console.log(process.argv[2]);
  const dlable = gss_csv_url.url;
  console.log(dlable);
})();

