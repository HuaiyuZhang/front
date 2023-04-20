// primitive values: saved in stack
let numOne = 42;
let numTwo = numOne;
console.log(numOne, numTwo);

numOne = 50;
console.log(numOne, numTwo);

// reference values: pointer was saved in stack, valus saved in heap.

let userOne = {name:'js', age:30};
let userTwo = userOne;
console.log(userOne, userTwo);

userOne.name = 'py';
console.log(userOne, userTwo);

// Knowledge: heap
// A heap is a specialized tree-based data structure that satisfies the heap property. It is a complete binary tree, which means that each level of the tree is fully filled, except for possibly the last level, which is filled from left to right. There are two main types of heaps: max-heaps and min-heaps.

// In a max-heap, the heap property states that each parent node is greater than or equal to its children nodes. The largest element in a max-heap is always at the root node. Conversely, in a min-heap, the heap property states that each parent node is less than or equal to its children nodes. The smallest element in a min-heap is always at the root node.

// Heaps are commonly used in implementing efficient priority queues, which are useful for various applications such as scheduling processes in operating systems, graph algorithms like Dijkstra's shortest path algorithm, and heapsort, a comparison-based sorting algorithm.

// Some of the main operations that can be performed on heaps include:

// Insertion: Adding a new element to the heap while maintaining the heap property.
// Deletion: Removing the element with the highest (max-heap) or lowest (min-heap) priority, usually the root node, and reorganizing the heap to maintain the heap property.
// Peek: Retrieving the element with the highest (max-heap) or lowest (min-heap) priority without removing it from the heap.

// Heaps can be efficiently implemented using an array, where each element represents a node in the tree, and parent-child relationships can be determined by index calculations.

// Knowledge: why use heap to save reference values in JS
// In JavaScript, there are two types of values: primitive values and reference values. Primitive values include data types like numbers, strings, booleans, null, and undefined. Reference values are objects, including arrays and functions.

// JavaScript uses the heap to store reference values because of how memory is managed in most programming languages. The heap is a region of memory used for dynamic memory allocation, which means that memory can be allocated and deallocated as needed during the execution of a program. This is particularly useful for handling objects whose size or lifetime is unknown at compile-time.

// When you create an object, array, or function in JavaScript, the memory for that reference value is allocated on the heap. The memory address where the value is stored is then assigned to the variable. When you use the variable in your code, JavaScript accesses the value by following the memory address stored in the variable, allowing you to work with the reference value stored in the heap.

// Storing reference values on the heap provides several benefits:

// Efficient memory management: The heap allows for dynamic memory allocation and deallocation, which is particularly useful for handling objects with varying sizes and lifetimes.
// Flexibility: Reference values, such as objects and arrays, can be changed and updated during the program's execution without the need to allocate new memory blocks.
// Performance: Storing reference values in the heap allows for better performance when dealing with complex data structures and large objects, as the memory can be allocated and deallocated as needed.
// In contrast, primitive values are typically stored on the stack, which is a more structured and faster region of memory, but with limited space and suited for values with known size and lifetime.

// Knowledge: how about Python

// Python, like JavaScript, also has two categories of data types: simple or primitive types (such as numbers, strings, and booleans) and complex or reference types (like lists, dictionaries, sets, and custom objects).

// Memory management in Python is handled by the Python memory manager, which allocates memory from the heap for both primitive and reference types. Unlike some other languages that differentiate between stack and heap memory for primitive and reference types, Python uses the heap for all data types. Python's memory manager takes care of the memory allocation and deallocation process, making it transparent for the developers.

// The reasons for Python's memory management approach are:

// Garbage collection: Python uses garbage collection to automatically reclaim memory that is no longer in use, freeing up space in the heap. This makes memory management simpler for developers and reduces the likelihood of memory leaks.
// Dynamic typing: Python is a dynamically-typed language, which means that the type of a variable can change at runtime. By managing memory on the heap, Python can more easily handle these dynamic types without the need for fixed-size memory blocks like those in the stack.
// Reference counting: Python uses reference counting to track the number of references to an object. When the reference count of an object reaches zero, it becomes eligible for garbage collection. Storing objects on the heap allows Python to manage reference counting and garbage collection more effectively.
// In summary, Python uses the heap for memory management of all data types, providing a flexible and dynamic approach to handle memory allocation and deallocation during program execution.




