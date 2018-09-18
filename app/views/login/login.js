exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
};
exports.signIn = function () {
    alert("Signing in");
};

exports.register = function () {
    alert("Registering");
};
var page;
var email;

var observableModule = require("data/observable");

var user = new observableModule.fromObject({
    email: "nativescriptrocks@progress.com",
    password: "password"
});