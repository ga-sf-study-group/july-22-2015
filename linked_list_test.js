
var jsds = require('./linked_list.js');
var test = new jsds.LinkedList([1,2,3,4,5]);
console.log(JSON.stringify(test, null, 2));
test.reverse();
console.log(JSON.stringify(test, null, 2));

test.head.next.next.next.next.next = test.head.next.next;
console.log(test.detectLoop());
