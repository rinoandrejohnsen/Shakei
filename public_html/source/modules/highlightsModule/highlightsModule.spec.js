define(['msgs/channels/pubsub'], function () {
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
        component: {
            literal: {
                receive: function (message) {
                    console.log('hello', message);
                }
            }
        },
        component: {
            literal: {
                receive: function (message) {
                    console.log('hello', message);
                }
            }
        },
        bus: {
            channels: {
                pubsubChannel: 'world'
            },
            
        },
        plugins: [
            {module: 'wire/aop'},
            {
                module: 'wire/debug',
                trace: {pointcut: /^((?!(model$|constructor$|_)).*)$/}
            },
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
});