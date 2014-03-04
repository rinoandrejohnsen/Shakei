define(["jquery", "underscore", "backbone", "knockout", "text!source/modules/highlightsModule/views/viewerView.html", "source/modules/highlightsModule/resources/constants"],
    function ($, _, Backbone, Knockout, Html, Constants) {
        var HighlightsView = Backbone.View.extend({
            initialize: function (viewModel) {
                this.template = Html;
                this.viewModel = viewModel;
            },
            render: function () {
                this.$el = $("#" + Constants.viewerViewId);
                this.$el.html(this.template);
                Knockout.applyBindings(this.viewModel, document.getElementById(Constants.viewerViewId));
                
                return this;
            }
        });

        return HighlightsView;
    }
);