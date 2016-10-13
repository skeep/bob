/**
 * Created by suman on 08/05/16.
 */

var C = require('chanakya');

C.response('fail', 'greetings', (to) => {
  return { text: `I am sorry ${to.first_name}, I am unable to understand what you mean.` }
});

C.response('doPostback', 'postback', (to) => {
  return { text: `${to.first_name}, I was expecting you to click on a button above!` }
});

C.response('askage', 'age', (to) => {
  return { text: `${to.first_name}, How old are you?` }
});

C.response('notInAgeLimit', 'greetings', (to) => {
  return { text: `${to.first_name}, Sorry you are not in permissible age. We serve customer only above 18 years, or below 60 years.` }
});

C.response('ageNaN', 'age', (to, validatorResult) => {
  return { text: `${to.first_name}, I don't think that ${validatorResult} is your age. Age should be only numbers.` }
});

C.response('showplans', 'postback', (to, validatorResult) => {

  let buttons = validatorResult.map((plan)=> {
    return {
      "type": "web_url",
      "url": "https://petersapparel.parseapp.com",
      "title": plan.name
    };
  });
  let plans = {
    "attachment": {
      "type": "template",
      "payload": {
        "template_type": "button",
        "text": `Some personalised plans for you, ${to.first_name}`,
        "buttons": buttons
      }
    }
  };
  return plans;
});

