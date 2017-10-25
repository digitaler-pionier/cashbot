var config = require('config.json');

var Cashbot = require('cashbot');
var cashbot = Cashbot.init(config.apiKey);

cashbot.getRecommendations(USER_ID, {
    n: 3
}).then(function(r) {
    console.log(r);
}).catch(function(e) {
    console.error(e);
});