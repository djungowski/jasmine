describe('Test normaler asserts', function() {

    beforeEach(function() {
        this.library = new Library();
    });

    describe('Vergleich von Zahlenwerten', function() {
        beforeEach(function() {
            this.expected = this.library.returnNumberTwo();
        });

        it('has two equal values', function() {
            expect(this.expected).toBe(2);
        });

        it('has two different values', function() {
            expect(this.expected).not.toEqual(3);
        });
    });

    describe('Exceptions', function() {
        it('throws an exception', function() {
            expect(this.library.throwsException).toThrow('Etwas ist schief gelaufen');
        });
    });

    describe('Checking for types', function() {
        it('returns a number', function() {
            expect(this.library.returnCurrentTimestamp()).toEqual(jasmine.any(Number));
        });

        it('returns a function', function() {
            expect(this.library.returnsFunction()).toEqual(jasmine.any(Function));
        });
    });
    
    describe('Regular expressions', function() {
        it('checks that the email is correct', function() {
            expect('foo@bar.de').toMatch(/[a-z]+@[a-z]+.[a-z]{2,6}/);
        });
    });

    describe('Delayed Timestamp Filling', function() {
        beforeEach(function() {
            jasmine.clock().install();
        });

        afterEach(function() {
            jasmine.clock().uninstall();
        });

        it('has a default value', function() {
            expect(this.library.currentTimestamp).toBeNull();
        });

        it('changes the value to the current timestamp', function() {
            this.library.delayedExecution();
            jasmine.clock().tick(1000);
            expect(this.library.currentTimestamp).toEqual(jasmine.any(Number));
        });
    });

    describe('Spies', function() {
        beforeEach(function() {
            this.httpConnectorSpy = {
                get: function() {},
                post: function() {}
            };

            this.library.setHttpConnector(this.httpConnectorSpy);
            spyOn(this.httpConnectorSpy, 'post');
            spyOn(this.httpConnectorSpy, 'get');
        });

        it('calls a spy method', function() {
            this.library.getUserInfo();
            expect(this.httpConnectorSpy.post).toHaveBeenCalledWith('/user/info', {'userId': 42});
            expect(this.httpConnectorSpy.get).not.toHaveBeenCalled();
        });

        it('does not call get method', function() {
            this.library.getUserInfo();
            expect(this.httpConnectorSpy.get).not.toHaveBeenCalled();
        });

        it('calls the post method five times', function() {
            this.library.callsPostFiveTimes();
            expect(this.httpConnectorSpy.post.calls.count()).toEqual(5);
        });
    });
});