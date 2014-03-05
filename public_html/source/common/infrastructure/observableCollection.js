define(['source/common/infrastructure/event'],
    function (Event) {

        if (typeof (Event) === "undefined" || !Event) {
            throw new Error("The dependency 'Event' is not loaded correctly");
        }

        function ObservableCollection () {
            var self = this;
            var items = [];

            self.collectionChanged = new Event(this);

            self.add = function (item) {
                items.push(item);
                this.collectionChanged.notify(item);
            };

            self.get = function () {
                return [].concat(items);
            };

            self.remove = function (index) {
                var item;

                item = items[index];
                items.splice(index, 1);
                this.collectionChanged.notify(item);
            };

            return self;
        }


        return ObservableCollection;
    }
);