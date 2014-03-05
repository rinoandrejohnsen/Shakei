define(["curl"],
    function (Curl) {
        
        function Bootstrapper () {
            var self = this;
            
            self.run = function () {
                Curl(['wire!./source/shakei/bootstrapper.spec'], function (context) {
                    // post actions
                    console.log(context);                   
                });
            };
            
            return self;
        }

        return Bootstrapper;
    }
);