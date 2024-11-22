/*
Wed, Nov 20, 2024
    Light Binary Trees and Traversal Notes:        
        -Binary Trees all have a root, and each node has at most two children (left child and right child)
        -each child node of the root is less then the root node on the left, and greater on the right
        -breath traversal will visit nodes in the order of the level of the tree
        -depth traversal will visit nodes in the order of the depth of the tree
        -need to have sorted Data before using a binary tree to search
*/

/*
Thursday November 21, 2024
        Sorting:
            -Bubble Sort: O(n^2) time complexity, O(1) space complexity, 
            bubble sorting is going through a list and comparing each pair 
            and checking if one is greater than the other, if so, swap them, 
            if not, move on to the next pair
            
            -Insertion Sort: O(n^2) time complexity, O(1) space complexity,
            insertion sort is going through a list and comparing each element
            to the previous one, if the current element is smaller, move it to the
            front of the previous element, if not, move on to the next element
            
            -Selection Sort: O(n^2) time complexity, O(1) space complexity,
            selection sort is going through a list and finding the smallest element
            and moving it to the front of the list, then finding the next smallest
            element and moving it to the front of the list, and so on
            
            -Merge Sort: O(n log n) time complexity, O(n) space complexity,
            merge sort is a divide and conquer algorithm, it splits the list
            into two halves, sorts them, and then merges them back together
            
            -Quick Sort: O(n log n) time complexity, O(log n) space complexity,
            quick sort is also a divide and conquer algorithm, it picks a pivot
            and puts all the elements less than the pivot on the left and all the
            elements greater than the pivot on the right

            -Recursive Sort: O(n log n) time complexity, O(n) space complexity,
            recursive sort is a divide and conquer algorithm, it splits the list
            into two halves, sorts them, and then merges them back together
*/
