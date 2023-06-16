/**
 * Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.
 * 
 * Example
 * Input: head = [1,2,3,3,4,4,5]
    Output: [1,2,5]
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
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
   let temp = new ListNode(0, head);
   let node = temp;
    while(head) {
      if(head.next && head.val === head.next.val) {
         while(head.next && head.val === head.next.val) {
            head = head.next;
         }
         node.next = head.next;
      } else {
         node = node.next;
      }
      head = head.next;
    }
    return temp.next;
};