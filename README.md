# Binary Trees


In its basic form, a Binary Search Tree is a data structure containing nodes with three properties:

* **Data** - value of the node
* **Left** - a reference to the next **lowest** value in the tree
* **Right** - a reference to the next **highest** value in the tree

![](http://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/200px-Binary_search_tree.svg_.png?raw=true)

#### When implementing a binary tree, there are a few rules to keep in mind:

* Values equal to or lower than the root node must go to the left
* Values higher than the root node must go to the right
* Each subsequent node must perform as a binary search tree
* The must not be any duplicate values

When looking for a specific value in a tree, you must traverse the tree starting from the root, making comparisons to values stored in the nodes of the subsequent leaves. Based on the comparison, you either continue searching in the left or right subtrees. 

From a speed perspective, each comparison allows the operations to skip about half of the tree. So each insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree or in Big-O... O(log n). 

### Exercise Time!


[CLONE THIS](https://github.com/mlimberg/binary-search-tree)

Split into groups of 3 and we'll work through the implementation of a binary search tree! 

#### We will work on implementing the following methods:

* *INSERT* 
  * add a node to the tree in the correct position based on the root node
* *FIND*
  * find a specific value within the tree
* *MIN*
  * get the lowest value in the tree
* *MAX*
  * get the highest value in the tree
* *DELETE*
  * remove a node from the tree
  * what happens to any child nodes???_

 #### If time allows, others to implement include:
 
 * *toArray*
    * return an array of all nodes in the tree in the order of `[root, left nodes, right nodes]`
 * *SORT*
    * return an array of all nodes in the tree sorted from lowest to highest
 * *COUNT*
    * get the total count of nodes in the tree
 * *SUM*
    * get the sum of all nodes in the tree
 * *getLevel*
    * get the level of the node passed in, in relation to the root
