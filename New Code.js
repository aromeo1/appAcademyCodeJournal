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
/*
Friday Nov, 22, 2024
    more sorting notes:
        -Worked on bubble sorting today, used 2 for loops but realized that if i just use one for loop 
        and compare each pair of elements, it would be more efficient
        -Would have to add a swapped variable and check each iteration to see if anything was swapped,
        and if nothing is then you can break out, but that would add more complexity 
*/
/*
Saturday, Nov 23, 2024
    After thanksgiving break:
        -First day back after thanksgiving break, did some work with html and css but nothing to crazy
        -Also worked on a project that involved using a binary search tree, and traversing it in different ways
        -Bubbble sort is ineficient, but it is simple to implement, and it is good for small lists
*/
/*
December 3, 2024
    Graphs:
        -Worked on graphing, learned about different types of graphs, such as directed and undirected
        -Also learned about bidirectional and undirected edges
        -Graph traversal is a big part of graphing, and there are different types of traversal,
        such as depth first and breadth first.
*/
/* 
December 4, 2024
    Graph Complexity:
        -Graph complexity is a measure of how difficult it is to traverse a graph
        -There are different types of graph complexity, such as linear, quadratic, and exponential
*/
/*
December 10, 2024
    HTML/CSS:
        -Started the new html coding module, learned about different types of tags and how to use them
        -Nothing crazy right away, but it's good to get a feel for how html and css work together
*/
/*
December 11, 2024
    HTML/CSS Day Two:
        -Playing around with more html content, and css styling
        -Classes and ids are useful for styling, and can be used to target specific elements
*/
/*
December 12, 2024
    HTML/CSS Day Three:
        -Worked on positioning and borders
        -import is good for getting styles and css from outside in your current program
        -lorem ipsum is good to fill out content on your web pages to test layouts and other things
        -Also started working on selectors, which are used to target specific elements in your html
*/
/*
December 13, 2024
    HTML/CSS Day Four:
        -Just more practicing with html and css
        -Heard of a program called dreamweaver that is a tool for webpage creation, 
        said we probably wouldn't need it but maybe a similar program could be useful
        for learning the emmence amount of css content
*/
/*
December 16, 2024
    Flexbox and Grid:
        -Learned that we dont have to manually type greater then signs to create content on the page,
        all we have to do is type the content and the language will automatically create the signs
        -p.intro create a intro class for p and p#fred makes a fred id
        -flexboxes are used to create flexible boxes, which can be used to create layouts
        -Grids are used to create grid systems, which can also be used to create layouts
*/
/*
December 18, 2024
    CSS Frameworks/Transitions!
        -downloaded practice assessment
        -practiced buttons and special characters
        -Frameworks are pre-made css files that can be used to create layouts
        -Bootstrap is a popular framework that can be used to create responsive layouts
        -Why use frameworks? They save time and make it easier to create layouts on tight 
        deadlines or with limited resources, they also add extra functionality to your website
        -Transitions are used to create animations between states, simple animations
        -Transitions can be used to create a more engaging user experience, and can be used to
        draw attention to specific elements on the page
*/
/* 
December 19, 2024
    Netlify:
        -Learned about netlify, a platform that can be used to host and deploy websites
        -Netlify can be used to host static websites, and can also be used to host dynamic
        websites that use a server-side language like python or ruby
        -Bad Habit: Using vs code to commit and push code to github instead of using the
        CLI(Command Line Interface)(Terminal)
*/
/* 
December 20, 2024
    Assessment Weekend :
        -Last day before winter break, the assessment is going to be making a moc up of their design
        -PRIORITY ASSESSMENT
        -Also used the <a> tag to create buttons that link to a different page, as well as a home button
        using free button css i found online
*/
/*
December 31, 2024
    Back from Break and Back to HTML:
        -REST, Postman, Servers, Requests, and Responses
        -REST is an acronym that stands for Representational State of Resource
        -HTTP requests are used to send data to a server, and HTTP responses are used to send
        data back to the client
        -API's are used to interact with servers, and can be used to send and receive data
        -Stands for Application Programming Interface
*/
/* 
January 2, 2024
    First Class of the New Year:
        -working on more postman get and post requests
        -used postman to get and post information from a server
*/
/*
January 3, 2024
    More Postman:
        -Collections are used to organize requests in postman
        -Variables are used to store and reuse values in postman
        -Started working on form tags as well, and how its used to
        send info from the user to the server
        -Promises request a value that youll eventually recieve but dont have yet
        -resolve is used to return a value from a promise
        -reject is used to reject a promise
        -promise.all is used to wait for all promises to resolve
        -async and await is used to make promises easier to read
        -fetch is used to make a request to a server
*/
/*
January 4, 2025
    Server Stuff:
        -Browser polyfills are used to make older browsers work with newer code
        -AJAX is used to make asynchronous requests to a server, and is used to update
        a webpage without having to reload the page
        -SPA 's are used to make a single page application, and are used to make a
        webpage that can be updated without having to reload the page
        -Fetch has two parameters, the first is the url of the server, and the second is
        the options of the request
*/
/*
January 5, 2025
    API's and Fetch:
        -Downloaded and worked a little bit on practice assessment
        -Used fetch to make a request to a server, and was able to get the data
        -Used fetch to make a post request to a server, and was able to send data
*/
/*
Janurary 6, 2025
    TCP and UDP:
        -TCP stands for Transmission Control Protocol, and is used to make sure data
        is delivered in the correct order
        -UDP stands for User Datagram Protocol, and is used to send data without
        making sure it is delivered in the correct order
*/
/*
January 7, 2025
    Assessment Day!!
        -Big review of everything learned so far about servers and APIs
        -So nothing really 
*/
/*
January 13, 2025
    Browsers, Scripts, BOM, DOM, and more:
        -Worked on adding js into html files using scripts
        -DOM represents the structure of a webpage, and you can manipulate it to 
        change styles, colors, or other elements dynamically
*/
/*
January 14, 2024
        Local Storage:
            -Lasts a Long Time: The data you save stays there even after you close the browser. It only goes away if you delete it.
            -Good For: Things you want to keep for a long time, like user settings or preferences.
        Cookies:
            -Temporary: The data you save is only available while the tab or window is open. It disappears when you close it.
            -Good For: Information you only need for a short time, like what you typed in a form during your current visit.
*/