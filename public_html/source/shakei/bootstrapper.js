define(["curl"],
    function (Curl) {
        function Bootstrapper () {
            this.run = function () {
                Curl(['wire!./source/shakei/bootstrapper.spec'], function (context) {
                    console.log(context);
                    
                });
            };
        }

        Bootstrapper.prototype.constructor = Bootstrapper;

        return Bootstrapper;
    }
);