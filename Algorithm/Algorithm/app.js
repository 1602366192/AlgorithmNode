'use strict';

class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

function printList(head) {
    while (head != null) {
        process.stdout.write(head.data + " ");
        head = head.next;
    }
    console.log(" ");
}

var list1 = new Node()
list1.data = 2
var item1 = new Node()
item1.data = 5
list1.next = item1

var item2 = new Node()
item2.data = 8
item1.next = item2
item2.next = null
printList(list1)

var list2 = new Node()
list2.data = 3
var item3 = new Node()
item3.data = 6
list2.next = item3
var item4 = new Node()
item4.data = 7
item3.next = item4
item4.next = null
printList(list2)

