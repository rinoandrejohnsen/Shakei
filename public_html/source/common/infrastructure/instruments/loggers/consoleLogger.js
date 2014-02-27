define([],
    function () {

        function ConsoleLogger () {
            var self = this;
            
            this.log = function (msg) {
                console.log(msg);
            };
            
            return self;
        }

        return ConsoleLogger;
    }
);