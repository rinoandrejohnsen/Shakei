define(["source/common/infrastructure/models/menuItem"],
    function (MenuItem) {
        
        if (typeof (MenuItem) === "undefined" || !MenuItem) {
            throw new Error("The dependency 'MenuItem' is not loaded correctly");
        }
        
        function HighlightsInitializer (menuService, highlightsView) {
            var self = this;
            
            var menuItem = new MenuItem({
                position: 1,
                name: "Highlights",
                view: highlightsView
            });
            
            menuService.addMenuItem(menuItem);
            
            return self;
        }

        return HighlightsInitializer;
    }
);


