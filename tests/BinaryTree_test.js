const chai = require('chai');
const expect = chai.expect;
const BinaryTrie = require('../BinaryTrie.js');
const Node = require('../Node.js');

describe('BinaryTrie', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTrie();
  });

  it.skip('should have a root node defaulted to null', () => {

  });

  describe('PUSH', () => {
    it.skip('should be able to add a node to the trie', () => {

    });

    it.skip('should move smaller data to the left', () => {

    });

    it.skip('should move larger data to the right', () => {

    });

    it.skip('should add data equal to the rootNode to the left', () => {

    });

    it.skip('should continue adding smaller data to the left down the tree', () => {

    });

    it.skip('should continue adding larger data to the right down the tree', () => {

    });

    it.skip('creates a tree structure wit.skiph multiple nodes', () => {

    });

});

  describe('FIND', () => {

    beforeEach(() => {
      tree.push(5);
    });

    it.skip('should find a match if node exists', () => {

    });

    it.skip('should return null if no match is found', () => {

    });

    beforeEach(() => {

              tree.push(4);
              tree.push(6);
              tree.push(7);
              tree.push(2);
              tree.push(3);
              tree.push(5);
              tree.push(1);
    });

    it.skip('should be able to find the root', () => {

    });

    it.skip('should be able to find results to the immediate left (2)', () => {

    });

    it.skip('should be able to find results to the far left (1)', () => {

    });

    it.skip('should be able to find results to the immediate right (6)', () => {

    });

    it.skip('should be able to find nested results (5 and 3)', () =>  {

    });

  });

  describe('toArray', () => {
    it.skip('should return an empty array if no nodes exist', () => {

    });

    it.skip('should return data from the tree into an array, starting with the root, then all left values, then all right', () => {
      // tree.push(5);
      // tree.push(4);
      // tree.push(6);
      // tree.push(7);
      // tree.push(3);
    });
  });

  describe('SORT', () => {
    it.skip('should return an empty array if no nodes exist', () => {

    });

    it.skip('should return a sorted array of tree elements, small to large', () => {
      // tree.push(5)
      // tree.push(4)
      // tree.push(6)
      // tree.push(7)
      // tree.push(3)
      // tree.push(2)
      // tree.push(2102)
    });
  });

  describe('MIN and MAX', () => {

    it.skip('min should return null if no nodes exist', () => {

    });

    it.skip('max should return null if no nodes exist', () => {

    });

    beforeEach(() => {
      tree.push(4);
      tree.push(6);
      tree.push(7);
      tree.push(2);
      tree.push(3);
      tree.push(5);
      tree.push(1);
    });

    it.skip('should find the min value', () => {

    });

    it.skip('should find the max value', () => {

    });
  });

  describe('', () => {

  });
});
