/**
 * Created by suman on 16/05/16.
 */


var C = require('chanakya'),
  Cfb = require('chanakya-facebook');

var bot = C.bootstrap({
  mount: 'bot',
  expectation: 'greetings',
  token: 'EAAZAYR9QffLgBADtG8KosCA3piFmizbFaQNl86mPXQRWYB3BQYcgyyTe82EZCMsrI7VYJMDqtID6D3HCYc6scZA6cZBbWtTkwQMVlh9ZBH0omZAWCZBmURrYVAumbr0wWWif6ocND9qIj72g4CwjtC0nyzp89RnTw6b4N7ZArFEItQZDZD'
});

Cfb.init(bot);
