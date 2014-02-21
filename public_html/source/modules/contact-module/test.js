define([],
    function () {
        
        function Test (menuService) {
            menuService.addMenuItem({pos:5, name:'Contact', content:'Hello World!'});
            
            return this;
        }

        Test.prototype.constructor = Test;

        return Test;
    }
);


