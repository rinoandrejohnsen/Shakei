define(['source/common/infrastructure/observableCollection'],
    function (ObservableCollection) {
        
        if (typeof (ObservableCollection) === "undefined" || !ObservableCollection) {
            throw new Error("The dependency 'ObservableCollection' is not loaded correctly");
        }
        
        function MenuService () {
            var self = this;
            
            var menuItemCollection = new ObservableCollection();

            self.getmenuItemCollection = function () {
                return menuItemCollection;
            };

            self.addMenuItem = function (menuItem) {
                menuItemCollection.add(menuItem);
            };
            
            return self;
        }

        return MenuService;
    }
);

