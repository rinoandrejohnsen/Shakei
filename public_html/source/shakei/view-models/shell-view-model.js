define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {
        /**function ViewModel (model) {
         var self = this;
         
         this.first_name = Knockback.observable(model, 'first_name');
         this.last_name = Knockback.observable(model, 'last_name');
         this.full_name = Knockout.computed(function () {
         return this.first_name() + " " + this.last_name();
         }, this);
         this.CurrentColumnWidth = Knockout.computed(function () {
         return "width: 100%; height: 700px; background: #1c1c1c;";
         }, this);
         
         Knockout.applyBindings(this);
         }
         
         return ViewModel;
         }*/

        function ShellViewModel (menuService) {
            var self = this;
            var menuItemCollection = menuService.getmenuItemCollection();
            
            self.Tab = function (id, name, text, selected) {
                var tab = this;
                tab.id = Knockout.observable(id);
                tab.name = Knockout.observable(name);
                tab.text = Knockout.observable(text);
                return tab;
            };
            self.selectedTab = Knockout.observable(1);
            this.CurrentColumnWidth = Knockout.computed(function () {
                return "width: 100%; height: 700px; background: #111;";
            }, this);
            self.tabs = Knockout.observableArray();
            self.tabs.push(new self.Tab(1, 'Highlights', '<h3>Shakei</h3>'));
            self.tabs.push(new self.Tab(2, 'About', 'This is Tab 2...'));
            self.tabs.push(new self.Tab(3, 'Work', 'I\'m tab 3'));
            self.tabs.push(new self.Tab(4, 'News', 'Hello World!'));
            self.addSeat = function () {
                self.tabs.push(new self.Tab(6, 'Rino', '<h3>Shakei</h3>'));
            }

            var postFeedItems = null;
            var that = this;

            menuItemCollection.collectionChanged.attach(function (item) {
                self.tabs.push(new self.Tab(item.item.pos, item.item.name, item.item.content));
            });

            return self;
        }

        return ShellViewModel;
    }
);