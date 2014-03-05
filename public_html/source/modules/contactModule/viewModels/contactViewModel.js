define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {
 
        function ContactViewModel () {
            var self = this;

            self.text = Knockout.observable("Hello World! - from a contactModule!");

            return self;
        }

        return ContactViewModel;
    }
);
