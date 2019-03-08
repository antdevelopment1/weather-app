const assert = require('assert');
const weather = require('../scripts/weather');
const {
    getLocationName,
    getLocationCountry,
    getLocationLatitude,
    getLocationLongitude,
    getDescription,
    getWindSpeed,
    getSunrise
} = require('../scripts/index');

describe('Location', function () {

    describe('getLocationName', function () {
        it('should be Atlanta', function () {
            assert.equal('Atlanta', getLocationName(weather));
        });
    });
    describe('getLocationCountry', function () {
        it('should be US', function () {
            assert.equal('US', getLocationCountry(weather));
        });
    });
    describe('getLocationLatitude', function () {
        it('should be 33.75', function () {
            assert.equal('33.75', getLocationLatitude(weather));
        });
    });
    describe('getLocationLongitude', function () {
        it('should be -84.39', function () {
            assert.equal('-84.39', getLocationLongitude(weather));
        });
    });
});

describe('Weather', function () {

    describe('getDescription', function () {
        it('should be "clear sky"', function () {
            assert.equal('clear sky', getDescription(weather));
        });
    });
    describe('getWindSpeed', function () {
        it('should be 3.1', function () {
            assert.equal(3.1, getWindSpeed(weather));
        });
    });
    describe('getSunrise', function () {
        it('should be 1551787231', function () {
            assert.equal(1551787231, getSunrise(weather));
        });
    });


});