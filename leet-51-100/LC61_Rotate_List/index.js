/**
 * Given the head of a linked list, rotate the list to the right by k places.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	if (!head) return head;
	let count = 0;
	let temp = head;
	while (temp) {
		count++;
		temp = temp.next;
	}
	k = k % count;
	let helper = head;
	temp = head;
	while (k--) {
		temp = temp.next;
	}
	while (temp.next) {
		helper = helper.next;
		temp = temp.next;
	}
	temp.next = head;
	head = helper.next;
	helper.next = null;
	return head;
};

console.log(rotateRight());