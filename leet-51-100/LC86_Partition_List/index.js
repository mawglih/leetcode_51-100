/**
 * Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x. You should preserve the original relative order of the nodes in each of the two partitions.

Example 1:
Input: head = [1,4,3,2,5,2], x = 3
Output: [1,2,2,4,3,5]

Example 2:
Input: head = [2,1], x = 2
Output: [1,2]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let smallHead = new ListNode(0, null);
    let smallTail = smallHead;
    let bigHead = new ListNode(0, null);
    let bigTail = bigHead;
    while(head) {
        if(head.val <= x) {
            smallTail.next = head;
            smallTail = smallTail.next;
        } else {
            bigTail.next = head;
            bigTail = bigTail.next;
        };
        head = head.next;
    }
    bigTail.next = null;
    smallTail.next =bigHead.next;
    return smallHead.next;
};

//runtime 64 ms
//memory 44.3 MB