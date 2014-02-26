define(["jquery", "underscore", "backbone", "knockout"],
    function ($, _, Backbone, Knockout) {
        var ShellView = Backbone.View.extend({
            initialize: function () {
                this.$el = $("body");
                this.template = 'Hello World! - from a highlightsModule!';
                //Knockout.applyBindings(viewModel);
            },
            render: function (id) {
                //this.$el = $(id);
                this.$el.html(this.template);
                return this.template;
            }
        });

        return ShellView;
    }
);