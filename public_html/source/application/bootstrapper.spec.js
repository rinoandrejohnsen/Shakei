define({
    view: {
        render: {
            template: {module: 'text!source/application/views/shellview.html'}
        },
        insert: {at: 'dom.first!body'}
    },
    text: {
        literal: {first_name: "Rino", last_name: "Johnsen"}
    },
    model: {
        create: {
            module: 'source/application/models/shellmodel',
            args: [
                {$ref: 'text'}
            ]
        }
    },
    viewModel: {
        create: {
            module: 'source/application/viewmodels/shellviewmodel',
            args: [
                {$ref: 'model'}
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
        {module: 'wire/dom'},
        {module: 'wire/dom/render'},
        {module: 'wire/connect'},
        {module: 'wire/on'},
        {module: 'msgs/wire'}
    ]
});


