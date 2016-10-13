/**
 * Created by suman on 09/05/16.
 */

var C = require('chanakya'),
  Q = require('q'),
  _ = require('lodash'),
  fetch = require('node-fetch');

C.validator('isGreetings', null, (message) => (Q.fcall(() => message == 'hi')));

C.validator('isValidAge', null, (message) => {

    let age = +message;
    let returnData;

    if (age > 60 || age < 18) {
      returnData = Q.fcall(() => {
        return {
          age: age,
          response: 'notInAgeLimit'
        };
      });
    }
    else if (_.isNaN(age)) {
      returnData = Q.fcall(() => {
        return {
          age: message,
          response: 'ageNaN'
        };
      });
    }
    else {
      returnData = fetch('http://www.mocky.io/v2/57ff29b01300006123dee3a6');
    }

    return returnData;
  }
);
