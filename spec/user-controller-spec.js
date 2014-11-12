describe('UserController', function() {
    beforeEach(module('Webinar'));

    beforeEach(inject(function($rootScope, $controller, $httpBackend) {
        this.scope = $rootScope.$new();
        this.httpBackend = $httpBackend;
        this.controller = $controller('Webinar.UserController', { '$scope': this.scope });
    }));

    afterEach(function() {
        this.httpBackend.verifyNoOutstandingExpectation();
        this.httpBackend.verifyNoOutstandingRequest();
    });

    describe('getUserNameFromServer()', function() {
        it('triggers a server call', function() {
            this.httpBackend.expectPOST('/user/name').respond(200, {'name': 'Dr. Zoidberg'});
            this.scope.getUserNameFromServer();
            expect(this.scope.userName).toBeNull();
            this.httpBackend.flush();
            expect(this.scope.userName).toEqual('Dr. Zoidberg');
        });
    });
    
    describe('openUserInfo()', function() {
        it('opens user info in a new window', inject(function($window) {
            spyOn($window, 'open');
            this.scope.openUserInfo();
            expect($window.open).toHaveBeenCalledWith('/user/show');
        }));
    });
});