define(["curl"],
    function (curl) {
        function Bootstrapper () {
            this.run = function () {
                curl(['wire!./source/shakei/bootstrapper-spec'], function (context) {
                    console.log(context);
                    
                    context.bus.send('world', 'Rino');
                    
                });
            };
        }

        Bootstrapper.prototype.constructor = Bootstrapper;

        return Bootstrapper;
    }
);