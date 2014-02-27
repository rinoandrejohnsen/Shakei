define(function () {
    function IsMenuItem () {
    }

    IsMenuItem.prototype.check = function (menuItem) {
        try {
            if ((typeof menuItem.get !== "function")) {
                throw new Error("this is not a duck");
            }
            else {
                console.log("");
            }
        }
        catch (error) {
            console.log("Error: " + error + ".");
            throw "exit";
        }
    };

    IsMenuItem.prototype.constructor =  IsMenuItem;

    return IsMenuItem;
});