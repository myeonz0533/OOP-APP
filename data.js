// OOPs Data Structure
// Content extracted from the handout: Classes, Objects, and Methods

const oopsData = {
    topics: [
        {
            title: "Introduction to Object-oriented Programming (OOP)",
            content: [
                "Object-oriented Programming (OOP) is one of the three (3) programming paradigms, including Procedural and Functional Programming. A programming paradigm refers to the different approaches to structuring and organizing code. For context, the term 'paradigm' is synonymous with 'pattern'.",
                "OOP is an extension of procedural programming with a slightly different approach to writing computer programs. Objects representing a model of an object in the real world are the main building blocks of OOP.",
                "OOP was developed to eliminate the limitations of other programming paradigms and to make programming more flexible, not too complex, and user-friendly.",
                "Writing OOP involves the following:",
                {
                    type: "list",
                    ordered: true,
                    items: [
                        "Creating classes that are the blueprint for objects",
                        "Creating objects that are specific instances of those classes",
                        "Creating applications that manipulate or use those objects"
                    ]
                },
                "Java, Python, VB.NET, and C# support this programming paradigm."
            ]
        },
        {
            title: "Programming Paradigms Comparison",
            content: [
                "In comparison, here is how each programming paradigm works:",
                "Procedural Programming:",
                "It is a style of programming in which operations are executed one after another in a sequence. It defines and uses variables that refer to the named computer memory locations that can hold data.",
                "For example, data might be read from an input device and stored in a location the programmer has named percentageOfPay. This variable value can be used as the basis for a decision, used in an arithmetic statement, or sent to an output device. The data stored in a variable can change during the execution of a program.",
                "Its basic construct is blocks of code-named 'procedures'. Procedures are grouped logical units based on individual operations used in a computer program. Procedures are also called functions, modules, subroutines, and methods, and Java programmers most frequently use them.",
                "As a procedural program executes its statements, it can sometimes pause to call a procedure, temporarily suspending the current logic so that the procedure's commands can be executed.",
                "BASIC, C, C++, and Pascal support this programming paradigm.",
                "Functional Programming:",
                "It is a style of programming that builds computer programs by focusing on declarations and expressions rather than the execution of statements. It aims to write code that is clearer to understand and more bug-resistant by avoiding flow-control statements such as for, while, break, continue, and goto, which makes the code harder to follow.",
                "Functions are the basic units of this programming paradigm, which are also treated like first-class citizens wherein they can be assigned to a variable, passed as an argument (a value or set of values that a function uses to perform its tasks), or returned from a function just like a regular variable.",
                "Erlang, Scala, Haskel, and Elm support this programming paradigm."
            ]
        },
        {
            title: "Naming Conventions and Differences",
            content: [
                "The naming conventions used in Procedural Programming and OOP are likened below:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Variable → Objects",
                        "User-defined Data Types → Classes",
                        "Structured Members → Instance Variables",
                        "Functions → Methods",
                        "Function Call → Message Passing"
                    ]
                },
                "Here are some of the differences between Procedural Programming and OOP:",
                "Procedural Programming emphasizes the procedures rather than the data, while OOP emphasizes the data rather than procedures.",
                "In Procedural Programming, data is not secured, while in OOP, data is secured.",
                "Procedural Programming uses a top-down approach, while OOP uses a bottom-up approach.",
                "Procedural Programming does not model the real-world entities, while OOP models the real-world entities.",
                "Procedural Programming decomposes programs into functions or procedures, while OOP decomposes programs into objects."
            ]
        },
        {
            title: "Advantages of OOP",
            content: [
                "OOP offers several key advantages:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Modularized programs by using classes and objects",
                        "Reduced code duplication and code reusability as linking code and object allows related objects to share common code",
                        "Provides data security as the data is encapsulated along with functions, making the data from non-member functions inaccessible and unmodifiable",
                        "Reduced complexity of the program development through the use of inheritance",
                        "Reduced time as creation and implementation of OOP code is easy"
                    ]
                }
            ]
        },
        {
            title: "Class",
            content: [
                "A class is a group or collection of objects with common properties. It is the basic unit of programming in OOP. It is also a user-defined data type, meaning it is created by the user to store complex data.",
                "In layman's terms, it is the same way that a blueprint exists before any houses are built or a recipe exists before any bread is baked from it. A class definition exists before any objects are created from it.",
                "A class definition describes what attributes its objects will have and what those objects can do. An attribute details the characteristics that define an object, which serves as properties of the object."
            ]
        },
        {
            title: "Object",
            content: [
                "An object is a specific and concrete instance of a class. It is an identifiable entity with some characteristics and behavior, which can be a person, place, or table of data. It is any real-world entity that has its existence and has both features called data members and operations called function members.",
                "Using a smartphone to further visualize the difference between data members and function members, the features of a smartphone, such as its color, weight, and price, are considered the data members, while its operation to make a video call, take photographs, or record audio are its function members.",
                "Understanding the object's class helps in understanding the characteristics of the object in the sense that if a friend purchased an automobile (class), it is a given that it has a model name (object). Additionally, objects can be compared to nouns, while methods are similar to verbs."
            ]
        },
        {
            title: "Method",
            content: [
                "Other than defining properties, classes define the methods their objects can use. A method is a self-contained block of program code that carries out actions similar to a procedure in Procedural Programming.",
                "A method is a program module containing a series of statements that carry out a task, which can be called an unlimited number of times. A familiar example is the main() method, which executes automatically when a program is run. A program's main() method can execute additional methods, which can also execute others.",
                "To execute a method, a programmer calls it or invokes it. In other words, a calling method, or client method, invokes a called method.",
                "A method header, or method declaration, provides information about how other methods can interact with it. For example, public static void main() is the method header.",
                "Components of a method header:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "public - an access modifier that allows any other class to use it and not just in the class in which the method resides. Other access modifiers include private, protected, and package if left unspecified.",
                        "static - used when any method can be used without instantiating an object or not requiring an object when they are called.",
                        "void - a return type used when a method returns no data. A return type describes the data type the method sends back to its calling method.",
                        "Method Name - can be any legal identifier for classes and variables. It must be one word with no spaces and cannot be a Java keyword. Methods perform an action, so their names usually contain a verb, such as display or compute.",
                        "Parentheses - contains data to be sent to the method. When a main() method is written in a class, the parentheses in its header surround String[] args."
                    ]
                },
                "A method body contains the statements that carry out the work of the method. It is found between a pair of curly braces. The body of a method is called its implementation.",
                "Advantages of creating a separate method:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Using a method call to execute different println() statements makes the main() method short and easy to follow",
                        "Using a well-named method makes it easy to see the overall intent of the separate println() statements",
                        "As methods are easily reusable, they can be used in any application that needs that specific action in the program"
                    ]
                }
            ]
        },
        {
            title: "Examples: Class, Object, and Method",
            content: [
                "Here are some examples that interconnect the three (3) concepts:",
                "Automobile (Class):",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Objects: Make, Model, Year, Color",
                        "Methods: Forward, Backward, Gas Status"
                    ]
                },
                "Dog (Class):",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Objects: Breed, Name, Age, Vaccine",
                        "Methods: Walking, Eating, Name Recognition"
                    ]
                }
            ]
        },
        {
            title: "Data Abstraction",
            content: [
                "Data Abstraction is the act of including only essential details of an entity without including the background details.",
                "For example, a smartphone with Bluetooth and camera features. Data abstraction does not care how Bluetooth or the camera works; it is only interested in using the smartphone and its features rather than their internal working. That information is hidden from the user and is called abstracted data."
            ]
        },
        {
            title: "Data Encapsulation",
            content: [
                "Data Encapsulation is the process of wrapping up data and functions into a class. It performs data hiding, which insulates data from outside programs. The data would not be accessible directly to the outside world except for the functions defined inside the class definition.",
                "This principle ensures that the internal representation of an object is hidden from view outside of the object's definition. Only the necessary information is exposed, and the rest is kept private."
            ]
        },
        {
            title: "Inheritance",
            content: [
                "Inheritance is the ability to create classes that share the attributes and methods of existing classes but with more specific features.",
                "The class that inherits the properties of the other class is called a base class, parent class, or superclass. The class that inherits the properties from the other class is called a derived class, child class, or subclass.",
                "For example, Employees are the base class, while the others below them are the derived class. The employee base class inherits properties from the derived classes, with each derived class having its own properties."
            ]
        },
        {
            title: "Polymorphism",
            content: [
                "Poly means many, while morph means forms. Polymorphism describes the feature of languages that allows the same word or symbol to be interpreted correctly in different situations based on the context. Examples of this include operator overloading and function overloading.",
                "Operator Overloading is the process of making an operator perform tasks in different instances. For example, using an addition (+) operator. As an arithmetic operator, it performs addition, but if used in a String such as 'Just'+'ice', it combines the two (2) strings and acts as a String concatenation operator resulting in 'Justice'.",
                "Function Overloading is the process of two (2) or more functions with the same name but different return types or numbers of arguments. For example, 'Paint() Items' as a single interface but has many methods, such as paint() furniture, paint() vehicle, and paint() building."
            ]
        },
        {
            title: "Creating Classes",
            content: [
                "Java classes can be classified into the following types:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Classes from which objects are not instantiated, such as the programs with the main() methods",
                        "Classes from which objects are created"
                    ]
                },
                "With OOP, a class can be created to run as an application to instantiate objects from them and do both.",
                "When creating a class, a name must be assigned to it, and the data and methods that will be part of the class must be determined.",
                "A class header has three (3) parts: an optional access specifier, the keyword class, and any legal identifier in naming the class, starting with an uppercase letter. For example: public class Employee",
                "After the class header, the class body is written between a set of curly braces and contains the data and methods for the class. The data components of a class are called data fields that are declared variables within a class but outside any method.",
                "A data field is static if it occurs once per class and non-static if it happens once per object. The private access specifier is used to provide the highest security level. Assigning private access to a field means that no other classes can access the field's values except the methods of the same class. The principle used in creating private access is referred to as information hiding, an important component of object-oriented programs.",
                "Methods that retrieve values are called accessor methods or getters that conventionally start with the prefix get. Methods that set or change field values are called mutator methods or setters that conventionally start with the prefix set."
            ]
        },
        {
            title: "Declaring Objects",
            content: [
                "In declaring objects, a two-step process is involved in creating an object that is an instance of a class. First, a type and an identifier are supplied, just like declaring any variable; second, computer memory is allocated for that object.",
                "For example, an integer as int someValue; can be declared this way, and an Employee can be declared as Employee someEmployee; wherein someEmployee can be any legal identifier, but objects start with a lowercase letter.",
                "In declaring int someValue, the compiler is notified that an integer named someValue will exist, and computer memory will be reserved for it at the same time. In declaring Employee someEmployee, the compiler is notified that the identifier someEmployee will be used, but computer memory will not be reserved for it.",
                "A new operator should be used to allocate the memory for an object such as this:",
                {
                    type: "code",
                    code: "Employee someEmployee;\nsomeEmployee = new Employee();\n\n// Or shortened:\nEmployee someEmployee = new Employee();"
                },
                "Wherein:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Employee is the object's type and class, while someEmployee is the object's name",
                        "Employee now also becomes a reference type as opposed to built-in types like int, which are primitive types",
                        "someEmployee also becomes a reference to an object - the name for a memory address where the object is held",
                        "The equal sign (=) is the assignment operator, assigning a value to someEmployee in the declaration",
                        "The new operator is allocating an unused portion of computer memory for someEmployee",
                        "Employee() after the new operator is the name of the method that constructs an Employee object. It is a constructor"
                    ]
                },
                "A constructor is a special type of method that creates and initializes objects. A constructor can be user-specified, but Java also writes one whenever a user does not write one. The name of the constructor is the same as the name of the class whose objects it constructs.",
                "After an object has been instantiated, the methods can be accessed using the object's identifier, a dot, and a method call."
            ]
        }
    ],
    
    questions: [
        {
            question: "How many programming paradigms are mentioned in the handout?",
            options: [
                "Two",
                "Three",
                "Four",
                "Five"
            ],
            correctAnswer: 1,
            explanation: "The handout mentions three programming paradigms: Procedural Programming, Functional Programming, and Object-oriented Programming (OOP)."
        },
        {
            question: "What is OOP an extension of?",
            options: [
                "Functional Programming",
                "Procedural Programming",
                "Logical Programming",
                "Declarative Programming"
            ],
            correctAnswer: 1,
            explanation: "OOP is an extension of procedural programming with a slightly different approach to writing computer programs."
        },
        {
            question: "In Procedural Programming, what are procedures also called?",
            options: [
                "Objects",
                "Classes",
                "Functions, modules, subroutines, and methods",
                "Variables"
            ],
            correctAnswer: 2,
            explanation: "Procedures are also called functions, modules, subroutines, and methods, and Java programmers most frequently use them."
        },
        {
            question: "Which programming languages support Functional Programming according to the handout?",
            options: [
                "Java, Python, VB.NET, C#",
                "BASIC, C, C++, Pascal",
                "Erlang, Scala, Haskel, Elm",
                "JavaScript, TypeScript, Ruby"
            ],
            correctAnswer: 2,
            explanation: "Erlang, Scala, Haskel, and Elm support the Functional Programming paradigm."
        },
        {
            question: "In OOP naming conventions, what corresponds to 'Functions' in Procedural Programming?",
            options: [
                "Objects",
                "Classes",
                "Methods",
                "Variables"
            ],
            correctAnswer: 2,
            explanation: "In OOP naming conventions, Functions in Procedural Programming correspond to Methods in OOP."
        },
        {
            question: "Which approach does OOP use?",
            options: [
                "Top-down approach",
                "Bottom-up approach",
                "Middle-out approach",
                "Random approach"
            ],
            correctAnswer: 1,
            explanation: "OOP uses a bottom-up approach, while Procedural Programming uses a top-down approach."
        },
        {
            question: "What is a class in OOP?",
            options: [
                "An instance of an object",
                "A group or collection of objects with common properties",
                "A method in a program",
                "A variable type"
            ],
            correctAnswer: 1,
            explanation: "A class is a group or collection of objects with common properties. It is the basic unit of programming in OOP."
        },
        {
            question: "What analogy is used to describe a class?",
            options: [
                "A house",
                "A blueprint or recipe",
                "A car",
                "A smartphone"
            ],
            correctAnswer: 1,
            explanation: "A class is likened to a blueprint that exists before houses are built or a recipe that exists before bread is baked."
        },
        {
            question: "What are the features of an object called?",
            options: [
                "Data members and function members",
                "Variables and constants",
                "Properties and attributes",
                "Fields and methods"
            ],
            correctAnswer: 0,
            explanation: "An object has both features called data members and operations called function members."
        },
        {
            question: "What is a method?",
            options: [
                "A variable in a class",
                "A self-contained block of program code that carries out actions",
                "An object instance",
                "A data type"
            ],
            correctAnswer: 1,
            explanation: "A method is a self-contained block of program code that carries out actions similar to a procedure in Procedural Programming."
        },
        {
            question: "What does 'public' mean in a method header?",
            options: [
                "The method returns no data",
                "The method can be used without instantiating an object",
                "An access modifier that allows any other class to use it",
                "The method name"
            ],
            correctAnswer: 2,
            explanation: "public is an access modifier that allows any other class to use it and not just in the class in which the method resides."
        },
        {
            question: "What does 'static' mean in a method header?",
            options: [
                "The method returns no data",
                "The method can be used without instantiating an object",
                "An access modifier",
                "The method name"
            ],
            correctAnswer: 1,
            explanation: "static is used when any method can be used without instantiating an object or not requiring an object when they are called."
        },
        {
            question: "What does 'void' mean in a method header?",
            options: [
                "The method returns no data",
                "The method can be used without instantiating an object",
                "An access modifier",
                "The method name"
            ],
            correctAnswer: 0,
            explanation: "void is a return type used when a method returns no data."
        },
        {
            question: "What is Data Abstraction?",
            options: [
                "Wrapping up data and functions into a class",
                "The act of including only essential details without background details",
                "Creating classes that share attributes",
                "Making operators perform different tasks"
            ],
            correctAnswer: 1,
            explanation: "Data Abstraction is the act of including only essential details of an entity without including the background details."
        },
        {
            question: "What is Data Encapsulation?",
            options: [
                "Including only essential details",
                "The process of wrapping up data and functions into a class",
                "Creating classes that share attributes",
                "Making operators perform different tasks"
            ],
            correctAnswer: 1,
            explanation: "Data Encapsulation is the process of wrapping up data and functions into a class. It performs data hiding."
        },
        {
            question: "What is the class that inherits properties called?",
            options: [
                "Base class, parent class, or superclass",
                "Derived class, child class, or subclass",
                "Main class",
                "Abstract class"
            ],
            correctAnswer: 1,
            explanation: "The class that inherits the properties from another class is called a derived class, child class, or subclass."
        },
        {
            question: "What does 'Poly' mean in Polymorphism?",
            options: [
                "Forms",
                "Many",
                "One",
                "Same"
            ],
            correctAnswer: 1,
            explanation: "Poly means many, while morph means forms. Polymorphism describes the feature that allows the same word or symbol to be interpreted correctly in different situations."
        },
        {
            question: "What is Operator Overloading?",
            options: [
                "Creating multiple operators",
                "The process of making an operator perform tasks in different instances",
                "Deleting operators",
                "Renaming operators"
            ],
            correctAnswer: 1,
            explanation: "Operator Overloading is the process of making an operator perform tasks in different instances, like the + operator performing addition or string concatenation."
        },
        {
            question: "What is Function Overloading?",
            options: [
                "Creating multiple functions with different names",
                "The process of two or more functions with the same name but different return types or numbers of arguments",
                "Deleting functions",
                "Renaming functions"
            ],
            correctAnswer: 1,
            explanation: "Function Overloading is the process of two (2) or more functions with the same name but different return types or numbers of arguments."
        },
        {
            question: "What are methods that retrieve values called?",
            options: [
                "Mutator methods or setters",
                "Accessor methods or getters",
                "Constructor methods",
                "Destructor methods"
            ],
            correctAnswer: 1,
            explanation: "Methods that retrieve values are called accessor methods or getters that conventionally start with the prefix get."
        },
        {
            question: "What are methods that set or change field values called?",
            options: [
                "Mutator methods or setters",
                "Accessor methods or getters",
                "Constructor methods",
                "Destructor methods"
            ],
            correctAnswer: 0,
            explanation: "Methods that set or change field values are called mutator methods or setters that conventionally start with the prefix set."
        },
        {
            question: "What is a constructor?",
            options: [
                "A method that retrieves values",
                "A method that sets values",
                "A special type of method that creates and initializes objects",
                "A regular method"
            ],
            correctAnswer: 2,
            explanation: "A constructor is a special type of method that creates and initializes objects. The name of the constructor is the same as the name of the class."
        },
        {
            question: "What is the name of the constructor?",
            options: [
                "constructor()",
                "init()",
                "The same as the name of the class",
                "create()"
            ],
            correctAnswer: 2,
            explanation: "The name of the constructor is the same as the name of the class whose objects it constructs."
        },
        {
            question: "What is a data field that occurs once per class called?",
            options: [
                "Non-static",
                "Static",
                "Private",
                "Public"
            ],
            correctAnswer: 1,
            explanation: "A data field is static if it occurs once per class and non-static if it happens once per object."
        },
        {
            question: "What access specifier provides the highest security level?",
            options: [
                "public",
                "private",
                "protected",
                "package"
            ],
            correctAnswer: 1,
            explanation: "The private access specifier is used to provide the highest security level. Assigning private access means no other classes can access the field's values except the methods of the same class."
        },
        {
            question: "Which programming languages support OOP according to the handout?",
            options: [
                "Java, Python, VB.NET, C#",
                "BASIC, C, C++, Pascal",
                "Erlang, Scala, Haskel, Elm",
                "JavaScript, TypeScript, Ruby"
            ],
            correctAnswer: 0,
            explanation: "Java, Python, VB.NET, and C# support the Object-oriented Programming paradigm."
        },
        {
            question: "In Procedural Programming, what corresponds to 'Variables' in OOP?",
            options: [
                "Objects",
                "Classes",
                "Methods",
                "Instance Variables"
            ],
            correctAnswer: 0,
            explanation: "In OOP naming conventions, Variables in Procedural Programming correspond to Objects in OOP."
        },
        {
            question: "What is the principle used in creating private access called?",
            options: [
                "Data hiding",
                "Information hiding",
                "Encapsulation",
                "Abstraction"
            ],
            correctAnswer: 1,
            explanation: "The principle used in creating private access is referred to as information hiding, an important component of object-oriented programs."
        },
        {
            question: "What is a data field that occurs once per object called?",
            options: [
                "Static",
                "Non-static",
                "Private",
                "Public"
            ],
            correctAnswer: 1,
            explanation: "A data field is static if it occurs once per class and non-static if it happens once per object."
        },
        {
            question: "What is the main() method?",
            options: [
                "A method that retrieves values",
                "A method that executes automatically when a program is run",
                "A constructor method",
                "A setter method"
            ],
            correctAnswer: 1,
            explanation: "A familiar example is the main() method, which executes automatically when a program is run."
        },
        {
            question: "What does the 'new' operator do?",
            options: [
                "Creates a new variable",
                "Allocates computer memory for an object",
                "Calls a method",
                "Returns a value"
            ],
            correctAnswer: 1,
            explanation: "The new operator is allocating an unused portion of computer memory for an object."
        },
        {
            question: "What is a reference type?",
            options: [
                "A primitive type like int",
                "A type that refers to a memory address where an object is held",
                "A method type",
                "A variable type"
            ],
            correctAnswer: 1,
            explanation: "An object also becomes a reference to an object - the name for a memory address where the object is held."
        },
        {
            question: "What is the fully qualified identifier?",
            options: [
                "Just the method name",
                "The class name, a dot, and the method name",
                "Just the class name",
                "The method name and parameters"
            ],
            correctAnswer: 1,
            explanation: "A complete name that includes the class is a fully qualified identifier. It includes the class name, a dot, and the method name."
        },
        {
            question: "What is the order in which methods appear in a class?",
            options: [
                "The order matters for execution",
                "The order does not matter on the order in which they are called",
                "Methods must be in alphabetical order",
                "Methods must be grouped by type"
            ],
            correctAnswer: 1,
            explanation: "The order in which the methods appear in a class does not matter on the order in which they are called or executed."
        },
        {
            question: "What is the main() method's parameter String[] args?",
            options: [
                "The return type",
                "The access modifier",
                "Data to be sent to the method",
                "The method name"
            ],
            correctAnswer: 2,
            explanation: "Parentheses contain data to be sent to the method. When a main() method is written in a class, the parentheses in its header surround String[] args."
        },
        {
            question: "What is the class that provides properties to be inherited called?",
            options: [
                "Derived class, child class, or subclass",
                "Base class, parent class, or superclass",
                "Main class",
                "Abstract class"
            ],
            correctAnswer: 1,
            explanation: "The class that inherits the properties of the other class is called a base class, parent class, or superclass."
        },
        {
            question: "What does 'morph' mean in Polymorphism?",
            options: [
                "Many",
                "Forms",
                "One",
                "Same"
            ],
            correctAnswer: 1,
            explanation: "Poly means many, while morph means forms. Polymorphism describes the feature that allows the same word or symbol to be interpreted correctly in different situations."
        },
        {
            question: "In the example 'Just' + 'ice', what does the + operator do?",
            options: [
                "Performs addition",
                "Acts as a String concatenation operator",
                "Throws an error",
                "Returns null"
            ],
            correctAnswer: 1,
            explanation: "If used in a String such as 'Just' + 'ice', it combines the two (2) strings and acts as a String concatenation operator resulting in 'Justice'."
        },
        {
            question: "What is the method body?",
            options: [
                "The method header",
                "The statements that carry out the work of the method, found between curly braces",
                "The method name",
                "The return type"
            ],
            correctAnswer: 1,
            explanation: "A method body contains the statements that carry out the work of the method. It is found between a pair of curly braces. The body of a method is called its implementation."
        }
    ]
};
