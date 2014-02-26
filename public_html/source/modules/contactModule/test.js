define([],
    function () {
        
        function Test (menuService, testView) {
            menuService.addMenuItem({pos:2, name:'Contact', content: testView});
            
            return this;
        }

        Test.prototype.constructor = Test;

        return Test;
    }
);


