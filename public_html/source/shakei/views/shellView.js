define(["jquery", "underscore", "backbone", "knockout", "text!source/shakei/views/shellView.html"],
    function ($, _, Backbone, Knockout, html) {
        var ShellView = Backbone.View.extend({
            initialize: function (viewModel) {
                this.$el = $("body");
                this.template = html;                
                this.viewModel = viewModel;
            },
            render: function () {
                this.$el.html(this.template);
                
                Knockout.applyBindings(this.viewModel);
                
                return this;
            }
        });

        return ShellView;
    }
);