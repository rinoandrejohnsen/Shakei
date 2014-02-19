define(["jquery", "underscore", "backbone", "knockout", "knockback", "text!source/application/views/shellview.html"],
    function ($, _, Backbone, Knockout, Knockback, html) {
        var View = Backbone.View.extend({
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

        return View;
    }
);