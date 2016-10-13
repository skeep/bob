/**
 * Created by suman on 09/05/16.
 */

var C = require('chanakya');

C.expectation('greetings', ['isGreetings'], (res) => {
  switch (res) {
  case true:
    return {
      data: res,
      responses: ['askage']
    };
    break;
  case false:
    return ['fail'];
    break;
  }
});

C.expectation('age', ['isValidAge'], (res) => {
  console.log(res.plans);
  switch (res.response) {
  case 'notInAgeLimit':
    return {
      data: res.age,
      responses: ['notInAgeLimit']
    };
    break;
  case 'ageNaN':
    return {
      data: res.age,
      responses: ['ageNaN']
    };
    break;
  default:
    return {
      data: res.plans,
      responses: ['showplans']
    };
  }
});
