define(["jquery", "underscore", "backbone", "knockout", "text!source/shakei/views/shellView.html"],
    function ($, _, Backbone, Knockout, Html) {
        
        if (typeof (Html) === "undefined" || !Html) {
            throw new Error("The dependency 'Html' is not loaded correctly");
        }

        var ShellView = Backbone.View.extend({
            initialize: function (shellViewModel) {
                this.$el = $("body");
                this.template = Html;                
                this.viewModel = shellViewModel;
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