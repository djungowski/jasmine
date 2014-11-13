describe('Jquery Test Suite', function() {
    describe('Magic happening', function() {

        beforeEach(function() {
            jasmine.getFixtures().set('<div><p id="clickable-button" class="button">Click here for magic to happen</p><p id="text-placeholder">Here be magic</p></div>');
            this.library = new ButtonLibrary();
        });

        it('has a default value', function() {
            expect($('#text-placeholder').html()).toEqual('Here be magic');
        });

        it('enters the timestamp when button is clicked', function() {
            this.library.buttonClickCallback();
            expect(parseInt($('#text-placeholder').text())).toEqual(jasmine.any(Number));
        });
    });

    describe('Setting button text from server', function() {
        it('sets the button text', function() {
            var httpConnectorSpy = {
                post: function() {}
            };

            spyOn(httpConnectorSpy, 'post').and.returnValue('Klick mich!');
            jasmine.getFixtures().set('<div><p id="clickable-button" class="button">Click here for magic to happen</p><p id="text-placeholder">Here be magic</p></div>');
            var library = new ButtonLibrary();
            library.setHttpConnector(httpConnectorSpy);
            library.setButtonTitle();

            expect(httpConnectorSpy.post).toHaveBeenCalledWith('/button/title');
            expect($('#clickable-button').text()).toEqual('Klick mich!');
        });
    });

});