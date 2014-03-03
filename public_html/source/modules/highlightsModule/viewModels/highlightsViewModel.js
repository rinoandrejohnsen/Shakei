define(["jquery", "underscore", "backbone", "knockout", "knockback"],
    function ($, _, Backbone, Knockout, Knockback) {

        function HighlightsViewModel (highlightsService) {
            var self = this;
            var bookCollection = highlightsService.getBookCollection();
            
            self.books = Knockout.observableArray();
            self.text = Knockout.observable("Hello World! - from a highlightsModule!");
            
            bookCollection.collectionChanged.attach(function (book) {
                self.books.push(book);
            });
            
            return self;
        }

        return HighlightsViewModel;
    }
);