var express = require('express');
const execSync = require('child_process').execSync;

var router = express.Router();

//Private
var privateVariable = true;

//Public
function System() {
    this.displayb = 1;
}

/**
 * Bind the module to the api and define api calls
 */
System.prototype.registerApi = function() {
    var self = this;

    //Display functions
    router.get('/display/brightness', function (req, res) {
        res.json(self.display.getBrightness());
    });
    router.post('/display/brightness', function (req, res) {
        res.json(self.display.setBrightness(parseInt(req.body.brightness)));
    });
    return router;
};

/**
 * Create a set of functions for the display property of the system
 */
System.prototype.display = {
    /**
     * Get the brightness of the display
     * @returns {{brightness: string}}
     */
    getBrightness: function() {
        return({
            brightness: '' + execSync('cat /sys/class/backlight/rpi_backlight/brightness')
        });
    },

    /**
     * Set the brightness of the display
     * @param val
     * @returns {{brightness: number, status: string}}
     */
    setBrightness: function(val) {
        if (/^\d+$/.test(val) !== false) {
            var ret = execSync('echo ' + val + ' > /sys/class/backlight/rpi_backlight/brightness');
            if (ret == '') {
                return({
                    brightness: val,
                    status: 'updated'
                });
            } else {
                throw 'Unexpected output from command: ' + ret;
            }
        } else {
            throw 'Argument should be a number!';
        }
    }
}

//Export the system
module.exports = System;
