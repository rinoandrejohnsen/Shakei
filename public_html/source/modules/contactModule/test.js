define(["source/common/infrastructure/models/menuItem"],
    function (MenuItem) {

        function Test (menuService, testView) {
            var menuItem = new MenuItem({
                position: 2,
                name: "Contact",
                view: testView
            });
            
            menuService.addMenuItem(menuItem);

            return this;
        }

        Test.prototype.constructor = Test;

        return Test;
    }
);


