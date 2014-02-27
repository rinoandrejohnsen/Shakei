define([],
    function () {
        
        function AlertLogger() {
            var self = this;
            
            this.log = function (msg) {
                alert(msg);
            };
            
            return self;
        }
        
        return AlertLogger;
    }
);

