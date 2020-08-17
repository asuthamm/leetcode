572. Subtree of Another Tree

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
// function Node(data) {       work the same as class Node above
//     this.data = data;
//     this.left = null;
//     this.right = null;
// }

const s = new Node(3)
s.left = new Node(4)
s.right = new Node(5)
s.left.left = new Node(1)
s.left.right = new Node(2)


const t = new Node(4)
t.left = new Node(1)
t.right = new Node(2)

function isSubtree(s, t) {
    if (s === null) {
      return false;
    } else  if (isSame(s, t)) {
      return true;
    } else {
      return isSubtree(s.left, t) || isSubtree(s.right, t) ;
    } 
}

function isSame(s, t) {
    if (s === null || t === null) {
      return s === null && t === null;
    } else if (s.data === t.data) {
      return isSame(s.left, t.left) && isSame(s.right, t.right);
    } else {
      return false
    }    
}

isSubtree(s,t);
