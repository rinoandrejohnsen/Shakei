define({
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
    view: {
        create: {
            module: 'source/application/views/shellview',
            args: [
                {$ref: 'viewModel'}
            ]
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
        {module: 'wire/on'}
    ]
});


