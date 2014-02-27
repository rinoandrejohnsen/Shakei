define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {

        function ShellViewModel (menuService) {
            var self = this;
            var menuItemCollection = menuService.getmenuItemCollection();

            self.tabs = Knockout.observableArray();
            self.Tab = function (id, name, text, selected) {
                var tab = this;
                tab.id = Knockout.observable(id);
                tab.name = Knockout.observable(name);
                tab.text = text;

                tab.myPostProcessingLogic = function () {
                    tab.text.$el = $("#" + tab.id());
                    tab.text.render();
                };

                return tab;
            };
            self.selectedTab = Knockout.observable(1);
            self.CurrentColumnWidth = Knockout.computed(function () {
                return "width: 100%; height: 700px; background: #111;";
            }, self);

            menuItemCollection.collectionChanged.attach(function (menuItem) {
                self.tabs.push(new self.Tab(menuItem.get("position"), menuItem.get("name"), menuItem.get("view")));
                self.tabs.sort(function (left, right) {
                    return left.id() === right.id() ? 0 : (left.id() < right.id() ? -1 : 1);
                });
                //self.tabs.valueHasMutated();
            });

            return self;
        }

        return ShellViewModel;
    }
);