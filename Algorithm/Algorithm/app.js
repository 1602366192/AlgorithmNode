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

function merge(head1, head2) {
    var head = new Node();
    var cursor = head;

    while (head1 != null || head2 != null) {

        if (head1 == null) {
            cursor.data = head2.data;
            if (head2.next != null) {
                cursor.next = new Node();
                cursor = cursor.next;
            } else {
                cursor = null;
            }

            head2 = head2.next;
            continue;
        }

        if (head2 == null) {
            cursor.data = head1.data;
            if (head1.next != null) {
                cursor.next = new Node();
                cursor = cursor.next;
            } else {
                cursor = null;
            }

            head1 = head1.next;
            continue;
        }

        if (head1.data <= head2.data) {
            cursor.data = head1.data;
            head1 = head1.next;
        } else {
            cursor.data = head2.data;
            head2 = head2.next;
        }

        cursor.next = new Node();
        cursor = cursor.next;
    }

    return head;
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

var list3 = merge(list1, list2)
printList(list3)

