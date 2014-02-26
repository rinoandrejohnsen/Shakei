define([],
    function () {
        
        function Test (menuService, testView) {
            menuService.addMenuItem({pos:1, name:'Highlights', content: testView});
            
            return this;
        }

        Test.prototype.constructor = Test;

        return Test;
    }
);


