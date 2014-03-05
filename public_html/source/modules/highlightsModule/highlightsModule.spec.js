define(['source/modules/highlightsModule/resources/constants', 'msgs/channels/pubsub' ],
    function (Constants) {
        
        if (typeof (Constants) === "undefined" || !Constants) {
            throw new Error("The dependency 'Constants' is not loaded correctly");
        }
        
        var HighlightsModuleSpec = {
            styles: {module: 'css!source/modules/highlightsModule/resources/styles/books.css'},
            highlightsService: {
                create: {
                    module: 'source/modules/highlightsModule/services/highlightsService'
                }
            },
            highlightsViewModel: {
                create: {
                    module: 'source/modules/highlightsModule/viewModels/highlightsViewModel',
                    args: [
                        {$ref: 'highlightsService'},
                        {$ref: 'bus'}
                    ]
                }
            },
            highlightsView: {
                create: {
                    module: 'source/modules/highlightsModule/views/highlightsView',
                    args: [
                        {$ref: 'highlightsViewModel'}
                    ]
                },
                after: {
                    render: "viewerView.render"
                }
            },
            viewerViewModel: {
                create: {
                    module: 'source/modules/highlightsModule/viewModels/viewerViewModel',
                    args: [
                        {$ref: 'highlightsService'},
                        {$ref: 'bus'}
                    ]
                }
            },
            viewerView: {
                create: {
                    module: 'source/modules/highlightsModule/views/viewerView',
                    args: [
                        {$ref: 'viewerViewModel'}
                    ]
                }
            },
            highlightsInitializer: {
                create: {
                    module: 'source/modules/highlightsModule/highlightsInitializer',
                    args: [
                        {$ref: 'menuService'},
                        {$ref: 'highlightsView'}
                    ]
                }
            },
            bus: {
                channels: {
                    pubsubChannel: Constants.channelId
                }
            },
            plugins: [
                {module: 'wire/aop'},
                {
                    module: 'wire/dom',
                    classes: {init: 'loading'}
                },
                {module: 'wire/dom/render'},
                {module: 'wire/connect'},
                {module: 'wire/on'},
                {module: 'msgs/wire'}
            ]
        };
        
        return HighlightsModuleSpec;
    }
);