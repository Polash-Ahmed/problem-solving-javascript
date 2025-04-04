// stack implementation

const MAX_SIZE = 30;

class Stack {
  constructor() {
    this.list = new Array(MAX_SIZE);
    this.top = -1;
  }
  push(item) {
    if(this.top>=MAX_SIZE){
      console.log('Stack Overflow');
      return false
    }
    this.list[++this.top] = item;
    return true
  }
  pop() {
    if(this.isEmpty()){
      console.log('Stack UnderFlow');
      return false
    }
    let item = this.list[this.top]
    delete this.list[this.top]
    this.top--
    return item
  }
  peek() {
    if(this.isEmpty()){
      console.log('Stack UnderFlow');
      return false
    }
    return this.list[this.top]
  }
  isEmpty() {
    return this.top < 0;
  }
}
