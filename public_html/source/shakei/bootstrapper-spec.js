define([], function () {
    var spec = {
        theme: {module: 'css!source/shakei/resources/styles/theme.css'},
        menuService: {
            create: {
                module: 'source/shakei/services/menu-service'
            }
        },
        shellViewModel: {
            create: {
                module: 'source/shakei/view-models/shell-view-model',
                args: [
                    {$ref: 'menuService'}
                ]
            }
        },
        shellView: {
            create: {
                module: 'source/shakei/views/shell-view',
                args: [
                    {$ref: 'shellViewModel'}
                ]
            }
        },
        contactModule: {
            wire: {
                spec: 'source/modules/contact-module/contact-module-spec',
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


