define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {
        function ViewModel (model) {
            var self = this;
            
            this.first_name = Knockback.observable(model, 'first_name');
            this.last_name = Knockback.observable(model, 'last_name');
            this.full_name = Knockout.computed(function () {
                return this.first_name() + " " + this.last_name();
            }, this);
            this.CurrentColumnWidth = Knockout.computed(function () {
                return "width: 100%; height: 700px; background: #1c1c1c;";
            }, this);
            
            Knockout.applyBindings(this);
        }

        return ViewModel;
    }
);