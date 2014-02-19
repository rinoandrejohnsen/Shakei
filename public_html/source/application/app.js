define(["./bootstrapper", "domReady!"],
    function (BootStrapper) {

        function App () {
            var bootStrapper = new BootStrapper();
            bootStrapper.run();
        }

        App.prototype.constructor = App;
        App.prototype.onLaunch = function () {
            console.log("Launching");
        };
        App.prototype.onSuspend = function () {
            console.log("Suspending");
        };
        App.prototype.onResume = function () {
            console.log("Resuming");
        };

        return App;
    }
);