describe('DateController', function() {
    beforeEach(module('Webinar'));

    beforeEach(inject (function($rootScope, $controller) {
        this.scope = $rootScope.$new();
        this.dateController = $controller('Webinar.DateController', {'$scope': this.scope});
    }));

    describe('dateChange', function() {
        it('has a default value', function() {
            expect(this.scope.currentDate()).toEqual(0);
        });

        it('changes the value', function() {
            var currentValue = this.scope.currentDate();
            this.scope.changeDate();
            expect(this.scope.currentDate()).not.toEqual(currentValue)
        });
    });
});