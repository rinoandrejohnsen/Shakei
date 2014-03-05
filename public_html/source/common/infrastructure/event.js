define([],
    function () {

        function Event (sender) {
            var self = this;
            var sender = sender;
            var listeners = [];

            self.attach = function (listener) {
                listeners.push(listener);
            };

            self.notify = function (args) {
                var index;

                for (index = 0; index < listeners.length; index += 1) {
                    listeners[index](args);
                }
            };

            return self;
        }

        return Event;
    }
);