define(["jquery", "underscore", "backbone", "knockout", "knockback", "source/modules/highlightsModule/resources/constants"],
    function ($, _, Backbone, Knockout, Knockback, Constants) {

        if (typeof (Constants) === "undefined" || !Constants) {
            throw new Error("The dependency 'Constants' is not loaded correctly");
        }

        function HighlightsViewModel (highlightsService, messageBus) {
            var self = this;
            var bookCollection = highlightsService.getBookCollection();

            self.books = Knockout.observableArray();
            self.incrementClickCounter = function(book) {
                messageBus.send(Constants.channelId, book.title);
            };

            bookCollection.collectionChanged.attach(function (book) {
                self.books.push(book);
            });

            return self;
        }

        return HighlightsViewModel;
    }
);