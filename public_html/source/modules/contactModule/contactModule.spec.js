define([], function () {
    var ContactModuleSpec = {
        contactViewModel: {
            create: {
                module: 'source/modules/contactModule/viewModels/contactViewModel'
            }
        },     
        contactView: {
            create: {
                module: 'source/modules/contactModule/views/contactView',
                args: [
                    {$ref: 'contactViewModel'}
                ]
            }
        },
        contactInitializer: {
            create: {
                module: 'source/modules/contactModule/contactInitializer',
                args: [
                    {$ref: 'menuService'},
                    {$ref: 'contactView'}
                ]
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

    return ContactModuleSpec;
});
