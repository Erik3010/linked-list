const LinkedList = require("./LinkedList");

const list = ["a", "b", "c", "d", "e", "f", "g", "h"];
const myLinkedList = new LinkedList();
list.forEach((item) => myLinkedList.push(item));

console.log(myLinkedList.delete(1));

console.log(myLinkedList.log());

// myLinkedList.each((item) => console.log(item.value));
