

var lineReader = require('readline').createInterface({
  terminal: false, input: require('fs').createReadStream('urls.txt')
});

lineReader.on('line', function (line) {
  console.log('Line from file:', line);
  console.log(extractDomain(line));
});

function extractDomain(url) {
  var domain;
  if (url.indexOf("://") > -1) {
    domain = url.split('/')[2];
  } else {
      domain = url.split('/')[0];
  }
      // domain = domain.split(':')[0];
      return domain;
}
