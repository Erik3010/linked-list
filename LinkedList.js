const Node = require("./Node");

class LinkedList {
  constructor() {
    this.start = null;
    this.end = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node({ value });

    if (this.isEmpty()) {
      this.start = node;
      this.end = node;
    } else {
      /**
       * the code below can works because javascript object is passed by reference
       */
      // this.end.next = node;

      // this.end = this.end.next;

      /**
       * Another way than using javascript pass by reference
       */
      let current = this.start;
      while (current !== null) {
        const next = current.next;
        if (next === null) {
          current.next = node;
          break;
        }
        current = next;
      }

      this.end = node;
    }
    this.length++;

    return node;
  }
  pop() {
    if (this.isEmpty()) return null;

    if (this.start === this.end) {
      this.start = null;
      this.end = null;
      this.length = 0;

      return null;
    }

    let current = this.start;
    let last;

    while (current !== null) {
      const next = current.next;
      if (next === this.end) {
        last = current;
        break;
      }
      current = next;
    }

    last.next = null;
    this.end = last;

    this.length--;

    return last;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.start;

    let current = this.start;
    let i = 0;
    while (i < index) {
      current = current.next;
      i++;
    }

    return current;
  }
  delete(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.start;

    if (index === 0) {
      this.start = current.next;
    } else {
      let prev;
      let i = 0;
      while (i < index) {
        prev = current;

        current = current.next;
        i++;
      }

      prev.next = current.next;
    }

    this.length--;

    return current;
  }
  log() {
    let log = "";
    let current = this.start;

    while (current !== null) {
      log += current.value + (current.next !== null ? " -> " : "");

      current = current.next;
    }

    return log;
  }
  isEmpty() {
    return this.length === 0;
  }
  each(callback) {
    let current = this.start;
    while (current !== null) {
      callback(current);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
