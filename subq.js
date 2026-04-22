const qstn = {
  OS: [
    {
      id: 1,
      q: "What is scheduling?",
      options: ["CPU allocation", "Memory management", "Disk management", "None of the above"],
      ans: 0
    },
    {
      id: 2,
      q: "Which OS processes jobs in groups without user interaction?",
      options: ["Time-sharing OS", "Batch OS", "Real-time OS", "Distributed OS"],
      ans: 1
    },
    {
      id: 3,
      q: "Which memory management technique suffers from external fragmentation?",
      options: ["Paging", "Segmentation", "Virtual Memory", "Cache Memory"],
      ans: 1
    },
    {
      id: 4,
      q: "What is a deadlock in an operating system?",
      options: ["A process running infinitely", "A situation where processes wait indefinitely for resources", "A memory leak", "CPU overheating"],
      ans: 1
    },
    {
      id: 5,
      q: "Which of the following is a non-preemptive scheduling algorithm?",
      options: ["Round Robin", "Shortest Remaining Time First", "First Come First Serve", "Multilevel Queue"],
      ans: 2
    },
    {
      id: 6,
      q: "The Belady's Anomaly is associated with which page replacement algorithm?",
      options: ["LRU", "Optimal", "FIFO", "LFU"],
      ans: 2
    },
    {
      id: 7,
      q: "Which part of the Operating System is responsible for interacting directly with the hardware?",
      options: ["Shell", "Kernel", "Compiler", "Utility"],
      ans: 1
    },
    {
      id: 8,
      q: "Which disk scheduling algorithm is also known as the 'elevator algorithm'?",
      options: ["SCAN", "FCFS", "SSTF", "C-LOOK"],
      ans: 0
    },
    {
      id: 9,
      q: "In a file system, what does an 'inode' represent?",
      options: ["The physical location of the file on disk", "The name of the file in the directory", "A backup copy of the file", "A data structure containing file metadata"],
      ans: 3
    },
    {
      id: 10,
      q: "Which of the following conditions is NOT required for a deadlock to occur?",
      options: ["Hold and Wait", "Mutual Exclusion", "Circular Wait", "Preemption"],
      ans: 3
    }
  ],

  DSA: [
    {
      id: 1,
      q: "Which data structure is used for recursion?",
      options: ["Queue", "Stack", "Heap", "Graph"],
      ans: 1
    },
    {
      id: 2,
      q: "What is the time complexity of binary search?",
      options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
      ans: 1
    },
    {
      id: 3,
      q: "Which sorting algorithm is stable?",
      options: ["Quick Sort", "Heap Sort", "Merge Sort", "Selection Sort"],
      ans: 2
    },
    {
      id: 4,
      q: "Which traversal uses a queue?",
      options: ["DFS", "BFS", "Inorder", "Postorder"],
      ans: 1
    },
    {
      id: 5,
      q: "Which algorithm is used to find shortest path in weighted graph (non-negative)?",
      options: ["DFS", "BFS", "Dijkstra", "Prim"],
      ans: 2
    },
    {
      id: 6,
      q: "Which data structure follows the Last-In-First-Out (LIFO) principle?",
      options: ["Stack", "Linked List", "Queue", "Binary Tree"],
      ans: 0
    },
    {
      id: 7,
      q: "What is the primary advantage of a Doubly Linked List over a Singly Linked List?",
      options: ["It uses less memory", "It is simpler to implement", "It has faster access time for random elements", "It allows for bidirectional traversal"],
      ans: 3
    },
    {
      id: 8,
      q: "Binary Search can only be applied to data that is:",
      options: ["Numerical only", "Stored in a Linked List", "Sorted", "Smaller than 100 elements"],
      ans: 2
    },
    {
      id: 9,
      q: "Which of the following sorting algorithms has the best worst-case time complexity?",
      options: ["Bubble Sort", "Merge Sort", "Quick Sort", "Selection Sort"],
      ans: 1
    },
    {
      id: 10,
      q: "What is the primary characteristic of a Queue data structure?",
      options: ["Last-In-First-Out (LIFO)", "First-In-First-Out (FIFO)", "Random Access", "Hierarchical Structure"],
      ans: 1
    }
  ],

  PYTHON: [
    {
      id: 1,
      q: "What is the correct file extension for Python files?",
      options: [".pyth", ".pt", ".pyt", ".py"],
      ans: 3
    },
    {
      id: 2,
      q: "Which of these is a mutable data type in Python?",
      options: ["String", "Tuple", "List", "Integer"],
      ans: 2
    },
    {
      id: 3,
      q: "How do you create a variable with the floating number 2.8?",
      options: ["x = 2.8", "x = float(2.8)", "Both of the above", "None of the above"],
      ans: 2
    },
    {
      id: 4,
      q: "Which method is used to remove whitespace from the beginning and end of a string?",
      options: ["strip()", "trim()", "len()", "clean()"],
      ans: 0
    },
    {
      id: 5,
      q: "What is the output of: print(type(5))?",
      options: ["<class 'int'>", "<class 'float'>", "<class 'str'>", "Error"],
      ans: 0
    },
    {
      id: 6,
      q: "Which of the following is the correct way to create a list in Python?",
      options: ["my_list = [1, 2, 3]", "my_list = (1, 2, 3)", "my_list = <1, 2, 3>", "my_list = {1, 2, 3}"],
      ans: 0
    },
    {
      id: 7,
      q: "What will be the output of print(type(5 / 2))?",
      options: ["<class 'float'>", "<class 'int'>", "2.5", "<class 'decimal'>"],
      ans: 0
    },
    {
      id: 8,
      q: "Which keyword is used to define a function in Python?",
      options: ["define", "func", "lambda", "def"],
      ans: 3
    },
    {
      id: 9,
      q: "What is the purpose of the break statement in a loop?",
      options: ["To exit the loop immediately", "To pause the loop for a specified time", "To skip the current iteration and move to the next", "To stop the entire program"],
      ans: 0
    },
    {
      id: 10,
      q: "Which operator is used for exponentiation (power) in Python?",
      options: ["^", "pow", "//", "**"],
      ans: 3
    }
  ],

  JAVA: [
    {
      id: 1,
      q: "Which keyword is used to create a class in Java?",
      options: ["class", "Class", "struct", "interface"],
      ans: 0
    },
    {
      id: 2,
      q: "What is the default value of a boolean variable in Java?",
      options: ["true", "false", "null", "0"],
      ans: 1
    },
    {
      id: 3,
      q: "Which method is the entry point of a Java program?",
      options: ["start()", "begin()", "main()", "run()"],
      ans: 2
    },
    {
      id: 4,
      q: "How do you create an array of integers in Java?",
      options: ["int[] arr;", "int arr[];", "Both A and B", "array int arr;"],
      ans: 2
    },
    {
      id: 5,
      q: "Which collection allows duplicate elements?",
      options: ["Set", "List", "Map", "None of the above"],
      ans: 1
    },
    {
      id: 6,
      q: "Which keyword is used for inheritance in Java?",
      options: ["extend", "extends", "inherit", "implements"],
      ans: 1
    },
    {
      id: 7,
      q: "Which keyword is used to create interface in Java?",
      options: ["class", "interface", "struct", "abstract"],
      ans: 1
    },
    {
      id: 8,
      q: "What is JVM?",
      options: ["Java Variable Machine", "Java Virtual Machine", "Java Verified Method", "Joint Virtual Model"],
      ans: 1
    },
    {
      id: 9,
      q: "Which is a primitive data type in Java?",
      options: ["String", "Array", "int", "Class"],
      ans: 2
    },
    {
      id: 10,
      q: "Which keyword is used for exception handling in Java?",
      options: ["try", "catch", "throw", "All of the above"],
      ans: 3
    }
  ],

  PHYSICS: [
    {
      id: 1,
      q: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      ans: 1
    },
    {
      id: 2,
      q: "Which of these is NOT a state of matter?",
      options: ["Solid", "Liquid", "Gas", "Energy"],
      ans: 3
    },
    {
      id: 3,
      q: "What is the speed of light in a vacuum?",
      options: ["3 x 10^8 m/s", "3 x 10^6 m/s", "340 m/s", "1500 m/s"],
      ans: 0
    },
    {
      id: 4,
      q: "Ohm's Law relates which three quantities?",
      options: ["Power, Energy, Time", "Voltage, Current, Resistance", "Mass, Force, Acceleration", "Distance, Speed, Time"],
      ans: 1
    },
    {
      id: 5,
      q: "What particle has a positive charge?",
      options: ["Electron", "Proton", "Neutron", "Photon"],
      ans: 1
    },
    {
      id: 6,
      q: "SI unit of capacitance?",
      options: ["Ohm", "Farad", "Henry", "Volt"],
      ans: 1
    },
    {
      id: 7,
      q: "SI unit of inductance?",
      options: ["Henry", "Farad", "Ohm", "Tesla"],
      ans: 0
    },
    {
      id: 8,
      q: "Electrical power formula?",
      options: ["VI", "IR", "V/R", "I/R"],
      ans: 0
    },
    {
      id: 9,
      q: "Unit of frequency?",
      options: ["Hertz", "m/s", "Newton", "Joule"],
      ans: 0
    },
    {
      id: 10,
      q: "Unit of resistance?",
      options: ["Ohm", "Volt", "Ampere", "Watt"],
      ans: 0
    }
  ]
};
