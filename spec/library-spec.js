it('shows that 2 is 2', function() {
    expect(2).toEqual(2);
});

it('shows that two objects are the same', function() {
    var objectA = {1:2, 2:3};
    var objectB = {1:2, 2:3};
	expect(objectA).toEqual(objectB);
});

it('shows that two objects are not the same', function() {
	var objectA = {1:2, 2:3};
	var objectB = {1:2, 2:3};
	expect(objectA).not.toBe(objectB);
});

it('matches a regexp', function() {
    expect('abcdef').toMatch(/cde/);
});

it('is undefined', function() {
    expect(undefined).toBeUndefined();
});

it('has a certain value in the array', function() {
    expect([1,2,3]).toContain(3);
});

describe('Library tests', function() {
	var lib;

	beforeEach(function() {
		lib = new Library();
	});

	afterEach(function() {
	    lib = null;
	});

	describe('#throwsSomething()', function() {

		beforeEach(function() {

		});

		it('throws an exception', function() {
			var throwsInTest = function () {
				lib.throwsSomething('throw');
			};
			expect(throwsInTest).toThrow();
		});
	});

	describe('#returnsFunction', function() {
	    it('returns a function', function() {
	        expect(lib.returnsFunction()).toEqual(jasmine.any(Function));
	    });
	});

	describe('delayed execution', function() {
		afterAll(function () {
			delete window.bla;
		});

	    it('runs something after 10s', function() {
	        jasmine.clock().install();
			lib.delayedExecution();
			jasmine.clock().tick(10000);
			expect(window.bla).toEqual(jasmine.any(Number));
			jasmine.clock().uninstall();
	    });
	});

	describe('async execution', function() {
		it('does something asynchronically', function(done) {
	        lib.asyncCall(function () {
				expect(window.bla).toEqual(6);
				done();
			});
	    });
	});

	it('shows that alert was called', function() {
	    spyOn(lib, 'returnsFunction').and.callThrough();
		var result = lib.callAlert();
		expect(lib.returnsFunction).toHaveBeenCalled();
		expect(result).toEqual(jasmine.any(Function));
	});

	it('alters the dom', function () {
		jasmine.getFixtures().set('<div id="alter-me"></div>');
		lib.alterDom();
		expect($('#alter-me').text()).toEqual("Ich wurde geändert");
	});

	it('loads the fixtures', function () {
		loadFixtures('dom.html');
		lib.alterDom();
		expect($('#alter-me').text()).toEqual("Ich wurde geändert");
	})
});