module.exports.config = {
    host: '<selenium-server-path>',
    port: 4444,
    path: '/wd/hub',
    desiredCapabilities: {
        browserName: 'chrome',
        version: '65.0',
        enableVNC: true,
        enableVideo: false
    }
};