define(["jquery", "underscore", "backbone"],
    function ($, _, Backbone) {
        return Backbone.Model.extend({
            parse: function (attrs) {
                var ownAttrs, attr;

                if (attrs.attributes) {
                    attrs = attrs.attributes;
                }

                ownAttrs = {};
                for (attr in attrs) {
                    if (attrs.hasOwnProperty(attr)) {
                        ownAttrs[ attr ] = attrs[ attr ];
                    }
                }

                return ownAttrs;
            },
            defaults: {
                first_name: "empty todo...",
                last_name: "false"
            }
        });
    }
);