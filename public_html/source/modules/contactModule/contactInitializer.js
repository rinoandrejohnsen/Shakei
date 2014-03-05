define(["source/common/infrastructure/models/menuItem"],
    function (MenuItem) {
        
        if (typeof (MenuItem) === "undefined" || !MenuItem) {
            throw new Error("The dependency 'MenuItem' is not loaded correctly");
        }
        
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


