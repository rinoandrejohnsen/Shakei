define(["jquery", "underscore", "backbone", "knockout", "text!source/modules/contactModule/views/contactView.html", "source/modules/contactModule/resources/constants"],
    function ($, _, Backbone, Knockout, Html, Constants) {
        var ContactView = Backbone.View.extend({
            initialize: function (viewModel) {
                this.template = Html;
                this.viewModel = viewModel;
            },
            render: function (id) {
                this.$el.html(this.template);
                
                Knockout.applyBindings(this.viewModel, document.getElementById(Constants.contactViewId));
                
                return this;
            }
        });

        return ContactView;
    }
);