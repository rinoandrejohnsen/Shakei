define([], function () {
    var HighlightsModuleSpec = {
        testView: {
            create: {
                module: 'source/modules/highlightsModule/testView'
            }
        },
        component: {
            create: {
                module: 'source/modules/highlightsModule/test',
                args: [
                    {$ref: 'menuService'},
                    {$ref: 'testView'}
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
