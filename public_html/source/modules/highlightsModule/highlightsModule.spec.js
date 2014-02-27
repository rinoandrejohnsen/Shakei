define([], function () {
    var HighlightsModuleSpec = {
        highlightsViewModel: {
            create: {
                module: 'source/modules/highlightsModule/viewModels/highlightsViewModel'
            }
        },
        highlightsView: {
            create: {
                module: 'source/modules/highlightsModule/views/highlightsView',
                args: [
                    {$ref: 'highlightsViewModel'}
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