// ? Q27. Stack implemantation using an array.

class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow Error : Stack is empty";
    } else {
      return this.items.pop();
    }
  }

  peek() {
    if (this.isEmpty()) {
      return "Underflow Error : Stack is empty";
    } else {
      return this.items[this.items.length - 1];
    }
  }
  size() {
    return this.items.length
  }

  isEmpty() {
    if (this.items.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  printStack(){
    // for(let i of this.items){
    //     console.log(i)
    // }

    console.log("Stack : ",this.items.join(" -> "))
  }
}

let myStack = new Stack();

myStack.push(10)
myStack.push(20)
myStack.push(30)
myStack.push(40)

myStack.pop() // it will remove last element, here "40" will be removed

console.log("Top Element of Stack is : ", myStack.peek()) // it will return top element of stack, here "30"
console.log("Is Stack Empty :", myStack.isEmpty()) // here , false
console.log("Size of Stack is : ", myStack.size()) // Stack size, here size is 3

myStack.printStack() // Print elements of stacks 

