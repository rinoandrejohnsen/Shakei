define(function () {
    function MenuItemValidator () {
        var self = this;
        
        self.check = function (menuItem) {
            try {
                if ((typeof menuItem.get !== "function")) {
                    throw new Error("this is not a MenuItem");
                }
                if ((typeof menuItem.get("position") === null) || (typeof menuItem.get("name") === null) || (typeof menuItem.get("view") === null)) {
                    throw new Error("One or more of the arguments in the MenuItem is null. This is not allowed");
                }
                else {
                    console.log("MenuItem validated successfully");
                }
            }
            catch (error) {
                console.log("Error: " + error + ".");
                throw "exit";
            }
        };
        
        return self;
    }

    return MenuItemValidator;
});