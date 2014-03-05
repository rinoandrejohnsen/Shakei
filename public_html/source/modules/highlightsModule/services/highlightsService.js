define(["jquery", 'source/common/infrastructure/observableCollection'],
    function ($, ObservableCollection) {

        if (typeof (ObservableCollection) === "undefined" || !ObservableCollection) {
            throw new Error("The dependency 'ObservableCollection' is not loaded correctly");
        }

        function HighlightsService () {
            var self = this;
            var bookCollection = new ObservableCollection();

            parseFeed("./source/modules/highlightsModule/data/data.xml");

            function parseFeed (url) {
                $.get(url, function (data) {
                    var xml = $(data);
                    xml.find("book").each(function () {
                        var $this = $(this), item = {
                            author: $this.find("author").text(),
                            title: $this.find("title").text(),
                            genre: $this.find("genre").text(),
                            price: $this.find("price").text(),
                            publish_date: $this.find("pubDate").text(),
                            image: $this.find("image").text(),
                            description: $this.find("description").text()
                        };

                        bookCollection.add(item);
                    });
                });
            }

            self.getBookCollection = function () {
                return bookCollection;
            };

            self.getItemByTitle = function (title) {
                var result = $.grep(bookCollection.get(), function (book) {
                    return book.title === title;
                });

                if (result.length === 1) {
                    return result[0];
                } else {
                    return null;
                }
            };

            return self;
        }

        return HighlightsService;
    }
);