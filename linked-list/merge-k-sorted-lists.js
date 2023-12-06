/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    if(lists.length === 0) return null

    while(lists.length > 1) {
        let list1 = lists.shift()
        let list2 = lists.shift()

        let merged = mergeLists(list1, list2)

        lists.push(merged)
    }

    return lists[0]
};

function mergeLists(l1, l2) {
let dummy = new ListNode(0)
let head = dummy

while(l1 && l2) {
    if(l1.val <= l2.val) {
        dummy.next = l1
        l1 = l1.next
    } else {
        dummy.next = l2
        l2 = l2.next
    }
    dummy = dummy.next
}

if(l1 === null) {
    dummy.next = l2
} else {
    dummy.next = l1
}

return head.next
}