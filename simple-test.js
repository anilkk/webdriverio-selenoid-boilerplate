const webdriverio = require('webdriverio');
const selenoid = require('./selenoid-conf');
const client = webdriverio.remote(selenoid.config);

client
    .init()
    .url('https://www.bitgrip.de/')
    .getTitle().then(function(title) {
    console.log('Title was: ' + title);
})
    .end()
    .catch(function(err) {
        console.log(err);
    });