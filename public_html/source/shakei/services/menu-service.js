define(['source/common/infrastructure/observableCollection'],
    function (ObservableCollection) {
        
        function MenuService () {
            var menuItemCollection = new ObservableCollection();

            this.getmenuItemCollection = function () {
                return menuItemCollection;
            };

            this.addMenuItem = function (menuItem) {
                menuItemCollection.add(menuItem);
            };
            
            return this;
        }

        MenuService.prototype.constructor = MenuService;

        return MenuService;
    }
);

