define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {

        function HighlightsViewModel (highlightsService, messageBus) {
            var self = this;
            var bookCollection = highlightsService.getBookCollection();

            self.books = Knockout.observableArray();
            self.incrementClickCounter = function() {
                var channel = messageBus.resolveChannel('world')
                messageBus.send("world", 'Rino');
            };

            bookCollection.collectionChanged.attach(function (book) {
                self.books.push(book);
            });

            return self;
        }

        return HighlightsViewModel;
    }
);