define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {

        function ViewerViewModel (messageBus) {
            var self = this;
            
            messageBus.subscribe("world", messageBus.outboundAdapter(rino));

            function rino (message) {
                console.log('hello', message);
                self.width("2000px;");
                self.height("700px;");
                self.visibility("visible;");
            }

            self.receive = function (message) {
                console.log('hello', message);
                
            };
            
            self.width = Knockout.observable('0px;');
            self.height = Knockout.observable('0px;');
            self.visibility = Knockout.observable('collapse;');

            self.CurrentColumnWidth = Knockout.computed(function () {
                return "background:#000; width:" + self.width() +  "height:" + self.height() + "visibility:" + self.visibility();
            }, self);

            return self;
        }

        return ViewerViewModel;
    }
);