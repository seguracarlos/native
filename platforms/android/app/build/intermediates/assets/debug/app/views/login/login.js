var UserViewModel = require("../shared/view-models/user-view-model");
var dialogsModule = require("ui/dialogs");
var frameModule = require("ui/frame");

var user = new UserViewModel();
var page;
var email;

exports.loaded = function (args) {
    page = args.object;
    page.bindingContext = user;
};
exports.signIn = function () {
    user.login()
        .catch(function (error) {
            console.log(error);
            dialogsModule.alert({
                message: "Unfortunately we could not find your account.",
                okButtonText: "OK"
            });
            return Promise.reject();
        })
        .then(function () {
            frameModule.topmost().navigate("views/list/list");
        });
};

exports.register = function () {
    user.register()
        .then(function () {
            dialogsModule
                .alert("Your account was successfully created.")
                .then(function () {
                    exports.toggleDisplay();
                });
        }).catch(function (error) {
            dialogsModule
                .alert({
                    message: "Unfortunately we were unable to create your account.",
                    okButtonText: "OK"
                });
        });
};