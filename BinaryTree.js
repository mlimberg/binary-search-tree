class BinaryTree {
<<<<<<< HEAD
  constructor() {
    this.rootNode = null
  }

  push(num) {
    var node = new Node(num)

    if(!this.rootNode) {
      return this.rootNode = node;
    }

    this.appendNode(node)
  }

  appendNode(node) {
    var currentNode = this.rootNode

    while(currentNode) {
      if(node.data <= currentNode.data) {
        if(!currentNode.left) {
          currentNode.left = node
          currentNode = null
        } else {
          currentNode = currentNode.left
        }
      } else {
        if(!currentNode.right) {
          currentNode.right = node
          currentNode = null
        } else {
          currentNode = currentNode.right
        }
      }
    }
  }

  delete(data) {
    let nodeToDelete = this.find(data)
    let currentNode = this.rootNode;
    let deletedNode = null;
    let deletedFound = false;
    let count = 0;

    if(!nodeToDelete) {
      deletedNode = undefined;
      deletedFound = true;
    } else if (currentNode.data === data) {
      deletedNode = currentNode;
      this.rootNode = null
      deletedFound = true
    }

    while (!deletedFound) {
      if(currentNode.right && currentNode.data < data) {
        if(currentNode.right.data === data) {
          deletedNode = currentNode.right
          currentNode.right = null
          deletedFound = true
        } else {
          currentNode = currentNode.right
        }
      } else if (currentNode.left && currentNode.data > data) {
        if(currentNode.left.data === data) {
          deletedNode = currentNode.left
          currentNode.left = null
          deletedFound = true;
        } else {
          currentNode = currentNode.left
        }
      }
    }

    return deletedNode
  }

  find(data) {
    var currentNode = this.rootNode
    var result = null;

    while (currentNode) {
      if(data === currentNode.data) {
        result = currentNode
        currentNode = null
      } else {
        if(data <= currentNode.data) {
          currentNode = currentNode.left
        } else {
          currentNode = currentNode.right
        }
      }
    }
    return result
  }

  toArray() {
    var array = [];
    var currentNode = this.rootNode;

    while(currentNode) {
      array.push(currentNode.data)
      while(currentNode.left) {
        currentNode = currentNode.left
        array.push(currentNode.data)
      }
      currentNode = this.rootNode
      while(currentNode.right) {
        currentNode = currentNode.right
        array.push(currentNode.data)
      }
      currentNode = null
    }
    return array
  }

  sort() {
    return this.toArray().sort(function(a, b) {
      return a - b
    })
  }

  min() {
    return this.sort()[0] || null
  }
=======
>>>>>>> 42062ea19cbaa94c914629631be5f0703b0aa3e8

}

module.exports = BinaryTree;
