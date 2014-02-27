define(["source/common/infrastructure/models/menuItem"],
    function (MenuItem) {
        
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


