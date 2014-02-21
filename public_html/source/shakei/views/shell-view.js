define(["jquery", "underscore", "backbone", "knockout", "knockback", "text!source/shakei/views/shell-view.html"],
    function ($, _, Backbone, Knockout, Knockback, html) {
        var ShellView = Backbone.View.extend({
            initialize: function (viewModel) {
                this.$el = $("body");
                this.template = html;

                this.render();

                Knockout.applyBindings(viewModel);
            },
            render: function () {
                this.$el.html(this.template);
                return this;
            }
        });

        return ShellView;
    }
);