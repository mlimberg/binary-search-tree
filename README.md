# Binary Trees


In its basic form, a Binary Search Tree is a data structure containing nodes with three properties:

* **Data** - value of the node
* **Left** - a reference to the next **lowest** value in the tree
* **Right** - a reference to the next **highest** value in the tree

<p align=center>
![](http://www.geeksforgeeks.org/wp-content/uploads/gq/2014/01/200px-Binary_search_tree.svg_.png?raw=true)
</p>

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
