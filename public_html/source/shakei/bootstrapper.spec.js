define([], function () {
    var spec = {
        theme: {module: 'css!source/shakei/resources/styles/theme.css'},
        menuService: {
            create: {
                module: 'source/shakei/services/menuService'
            }
        },
        shellViewModel: {
            create: {
                module: 'source/shakei/viewModels/shellViewModel',
                args: [
                    {$ref: 'menuService'}
                ]
            }
        },
        shellView: {
            create: {
                module: 'source/shakei/views/shellView',
                args: [
                    {$ref: 'shellViewModel'}
                ]
            },
            init: {
                render: ''
            }
        },
        contactModule: {
            wire: {
                spec: 'source/modules/contactModule/contactModule.spec',
                provide: {
                    mainRegion: {$ref: 'menuService'}
                }
            }
        },
        highlightsModule: {
            wire: {
                spec: 'source/modules/highlightsModule/highlightsModule.spec',
                provide: {
                    mainRegion: {$ref: 'menuService'}
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


