define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {
        
        function ShellViewModel (menuService) {
            var self = this;
            var menuItemCollection = menuService.getmenuItemCollection();

            self.tabs = Knockout.observableArray();
            self.tab = function (id, name, view, selected) {
                var tab = this;
                tab.id = Knockout.observable(id);
                tab.name = Knockout.observable(name);
                tab.view = view;
                tab.afterRenderHandler = function () {
                    tab.view.$el = $("#" + tab.id());
                    tab.view.render();
                };

                return tab;
            };
            self.selectedTab = Knockout.observable(1);
            self.style = Knockout.computed(function () {
                return "width: 2000px; height: 700px; background: #000; overflow-x: visible;";
            }, self);

            menuItemCollection.collectionChanged.attach(function (menuItem) {
                self.tabs.push(new self.tab(menuItem.get("position"), menuItem.get("name"), menuItem.get("view")));
                self.tabs.sort(function (left, right) {
                    return left.id() === right.id() ? 0 : (left.id() < right.id() ? -1 : 1);
                });
            });

            return self;
        }

        return ShellViewModel;
    }
);