(function (curl) {

    var config = {
        baseUrl: "",
        pluginPath: "curl/plugin",
        paths: {
            jquery: 'library/jquery/jquery',
            underscore: 'library/underscore/underscore'
        },
        packages: [
            {name: "backbone", location: 'library/backbone', main: 'backbone.js', config: {loader: 'curl/loader/legacy', exports: 'Backbone.noConflict()', requires: ['jquery', 'underscore']}},
            {name: "curl", location: "library/curl/src/curl", main: "../curl"},
            {name: "knockback", location: "library/knockback", main: "knockback"},
            {name: "knockout", location: "library/knockout", main: "knockout"},
            {name: "meld", location: "library/meld", main: "meld"},
            {name: "msgs", location: "library/msgs", main: "msgs"},
            {name: "when", location: "library/when", main: "when"},
            {name: "wire", location: "library/wire", main: "./wire"}
        ],
        locale: false
    };

    curl(config, ["source/shakei/application"]).then(done, failure);

    function done (Application) {
        try {
            var application = new Application();
            application.run();
        }
        catch (error) {
            failure(error);
        }
    }

    function failure (error) {
        console.log("An error occurred.", error.message);

        if (error.stack) {
            console.log(error.stack);
        }
    }

})(this.curl);