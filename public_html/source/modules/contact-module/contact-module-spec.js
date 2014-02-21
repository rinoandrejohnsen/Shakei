define([], function () {
    var ContactModuleSpec = {
        component: {
            create: {
                module: 'source/modules/contact-module/test',
                args: [
                    {$ref: 'menuService'}
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

    return ContactModuleSpec;
});
