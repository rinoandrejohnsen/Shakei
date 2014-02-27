define(["source/common/infrastructure/models/menuItem"],
    function (MenuItem) {

        function ContactInitializer (menuService, contactView) {
            var self = this;
            
            var menuItem = new MenuItem({
                position: 2,
                name: "Contact",
                view: contactView
            });
            
            menuService.addMenuItem(menuItem);

            return self;
        }

        return ContactInitializer;
    }
);


