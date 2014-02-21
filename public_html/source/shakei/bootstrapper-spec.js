define([], function () {
    var spec = {
        theme: {module: 'css!source/shakei/resources/styles/theme.css'},
        viewModel: {
            create: {
                module: 'source/shakei/view-models/shell-view-model'
            }
        },
        view: {
            create: {
                module: 'source/shakei/views/shell-view',
                args: [
                    {$ref: 'viewModel'}
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
        bus: {
            channels: 'world',
            subscribe: {
                world: 'component.receive'
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

    return spec;
});


