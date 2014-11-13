var Library = function () {

};

Library.prototype.returnNumberTwo = function () {
    return 2;
};

Library.prototype.throwsException = function() {
    throw('Etwas ist schief gelaufen');
};

Library.prototype.returnCurrentTimestamp = function () {
    return new Date().getTime();
};

Library.prototype.returnsFunction = function () {
    return function () {

    };
};

Library.prototype.currentTimestamp = null;

Library.prototype.delayedExecution = function () {
    var me = this;

    window.setTimeout(function () {
        me.currentTimestamp = me.returnCurrentTimestamp();
    }, 1000);
};

Library.prototype.httpConnector = null;
Library.prototype.setHttpConnector = function (httpConnector) {
    this.httpConnector = httpConnector;
};

Library.prototype.getUserInfo = function () {
    return this.httpConnector.post('/user/info', {'userId': 42});
};

Library.prototype.callsPostFiveTimes = function () {
    this.httpConnector.post('/refresh');
    this.httpConnector.post('/refresh');
    this.httpConnector.post('/refresh');
    this.httpConnector.post('/refresh');
    this.httpConnector.post('/refresh');
}