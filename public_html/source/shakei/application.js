define(["./bootstrapper"],
    function (Bootstrapper) {
        
        if (typeof (Bootstrapper) === "undefined" || !Bootstrapper) {
            throw new Error("The dependency 'Bootstrapper' is not loaded correctly");
        }
        
        function Application () {
            var self = this;
            
            var bootstrapper = new Bootstrapper();
            
            self.run = function () {
                bootstrapper.run();
            };
            
            return self;
        }

        return Application;
    }
);