// ? Q. Queue implementation using Array.
// ! FIFO

class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(elem) {
    this.items.push(elem);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "Underflow Error : Queue is Empty";
    } else {
      return this.items.shift();
    }
  }

  front() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0];
  }

  size() {
    return this.items.length;
  }

  isEmpty() {
    return this.items.length === 0;
  }

  printQueue() {
    return this.items.join(" <- ");
  }
}

let myQueue = new Queue();

myQueue.enqueue(10);
myQueue.enqueue(25);
myQueue.enqueue(78);
myQueue.enqueue(66);

console.log("Is Queue Empty : ", myQueue.isEmpty());

console.log(myQueue.dequeue());

console.log("Front Element of Queue is : ", myQueue.front());

console.log("Size of Queue is : ", myQueue.size());

console.log("Queue : ", myQueue.printQueue());
