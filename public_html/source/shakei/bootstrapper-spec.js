define([], function () {
    var spec = {
        theme: {module: 'css!source/shakei/resources/styles/theme.css'},
        view: {
            render: {
                template: {module: 'text!source/shakei/views/shellview.html'}
            },
            insert: {at: 'dom.first!body'}
        },
        text: {
            literal: {first_name: "Rino", last_name: "Johnsen"}
        },
        model: {
            create: {
                module: 'source/shakei/models/shell-model',
                args: [
                    {$ref: 'text'}
                ]
            }
        },
        viewModel: {
            create: {
                module: 'source/shakei/view-models/shell-view-model',
                args: [
                    {$ref: 'model'},
                    {$ref: 'view'}
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


