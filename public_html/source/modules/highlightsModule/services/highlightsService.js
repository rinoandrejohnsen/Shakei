define(["jquery", 'source/common/infrastructure/observableCollection'],
    function ($, ObservableCollection) {

        function HighlightsService () {
            var self = this;
            var bookCollection = new ObservableCollection();

            parseFeed("./source/modules/highlightsModule/data/data.xml");

            function parseFeed (url) {
                $.get(url, function (data) {
                    var $xml = $(data);
                    $xml.find("book").each(function () {

                        var $this = $(this), item = {
                            title: $this.find("title").text(),
                            link: $this.find("link").text(),
                            description: $this.find("description").text(),
                            image: $this.find("image").text(),
                            pubDate: $this.find("pubDate").text(),
                            author: $this.find("author").text()
                        };
                        
                        bookCollection.add(item);
                    });
                });
            }
            
            this.getBookCollection = function () {
                return bookCollection;
            };

            return self;
        }

        return HighlightsService;
    }
);