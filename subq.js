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
      options: [
        "A process running infinitely",
        "A situation where processes wait indefinitely for resources",
        "A memory leak",
        "CPU overheating"
      ],
      ans: 1
    },
    {
      id: 5,
      q: "Which of the following is a non-preemptive scheduling algorithm?",
      options: [
        "Round Robin",
        "Shortest Remaining Time First",
        "First Come First Serve",
        "Multilevel Queue"
      ],
      ans: 2
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
    }
  ]
};
