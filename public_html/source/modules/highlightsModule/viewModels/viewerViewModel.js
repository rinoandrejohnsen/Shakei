define(["jquery", "underscore", "backbone", "knockout", "knockback", "source/modules/highlightsModule/resources/constants"],
    function ($, _, Backbone, Knockout, Knockback, Constants) {

        if (typeof (Constants) === "undefined" || !Constants) {
            throw new Error("The dependency 'Constants' is not loaded correctly");
        }

        function ViewerViewModel (highlightsService, messageBus) {
            var self = this;
            messageBus.subscribe(Constants.channelId, messageBus.outboundAdapter(messageHandler));

            function messageHandler (message) {
                var item = highlightsService.getItemByTitle(message);
                self.book(item);
                self.width("2000px;");
                self.height("700px;");
                self.visibility("visible;");
            }
            
            self.book = Knockout.observable();


            self.closeButtonHandler = function() {
                self.width("0px;");
                self.height("0px;");
                self.visibility("collapse;");
            };

            self.width = Knockout.observable('0px;');
            self.height = Knockout.observable('0px;');
            self.visibility = Knockout.observable('collapse;');

            self.style = Knockout.computed(function () {
                return "background:#000; width:" + self.width() + "height:" + self.height() + "visibility:" + self.visibility();
            }, self);

            return self;
        }

        return ViewerViewModel;
    }
);