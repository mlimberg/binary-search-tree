var chai = require('chai');
var expect = chai.expect;
var Node = require('../Node.js');

describe('Node', function(){
    it('should have data', function() {
      var node = new Node(0);
      expect(node.data).to.eq(0);
    });

    it('should have a default null value for left and right nodes', function(){
      var node = new Node(0);
      expect(node.left).to.eq(null);
      expect(node.right).to.eq(null);
    });

    it('can have a left node', function(){
      var node1 = new Node(1);
      var node2 = new Node(0, node1);
      expect(node2.left.data).to.eq(1);
    });

    it('can assign a right node', function(){
      var node1 = new Node(1);
      var node2 = new Node(0, null, node1);
      expect(node2.right.data).to.eq(1);
    });
});
