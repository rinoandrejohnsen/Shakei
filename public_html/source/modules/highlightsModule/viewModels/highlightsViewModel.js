define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {

        function HighlightsViewModel () {
            var self = this;

            self.text = Knockout.observable("Hello World! - from a highlightsModule!");

            return self;
        }

        return HighlightsViewModel;
    }
);