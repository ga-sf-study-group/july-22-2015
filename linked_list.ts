///<reference path='./typings/node/node.d.ts'/>
"use strict";
class LLNode<A> {
  value: A;
  next: LLNode<A>;
  constructor(value: A, next: LLNode<A>) {
    this.value = value;
    this.next =  next || null;
  }

}

class LinkedList<A> {
  head: LLNode<A>;
  constructor(values: Array<A>) {
    this.head = null;
    for(let i = 0; i < values.length; i++) {
     this.add(values[i]); 
    }
  }

  add(value: A) {
    this.head = new LLNode<A>(value, this.head);
  }

  reverse() {
    let current = this.head;
    let next;
    let prev;
    // a-> b -> c-> null
    while(current.next !== null) {
      if( current === this.head) {
        prev = current;
        next = current.next
        current.next = null;
        current = next;
      }else{
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
    }
    current.next = prev;
    this.head = current
    return this.head;
  }

  detectLoop() {
    let current = this.head;
    let lag = this.head;

    while(current != null) {
      lag = lag.next;
      current = current.next; 
      current = current ? current.next : null;

      if(lag == current) {
        //loop detected
        let nodeset = new Set();
        do {
          nodeset.add(current);
          nodeset.add(lag);
          lag = lag.next;
          current = current.next;
          current = current.next;
        } while(current !== lag) 
        current = this.head; 
        while(!nodeset.has(current)) {
          current = current.next;
        }
        return current;
      }
    }
    
  }
};



module.exports = {
  LinkedList: LinkedList,
  LLNode: LLNode
};
