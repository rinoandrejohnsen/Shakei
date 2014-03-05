define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {

        var MenuItem = Backbone.Model.extend({
            defaults: {
                position: null,
                name: null,
                view: null
            }
        });

        return MenuItem;
    }
);
