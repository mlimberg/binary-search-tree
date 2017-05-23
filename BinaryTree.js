const Node = require('./Node.js')

class BinaryTree {
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

  max() {
    const sortedArray = this.sort()
    return sortedArray[sortedArray.length - 1] || null
  }
}

module.exports = BinaryTree;
