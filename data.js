// OOPs Data Structure
// This file contains the topics and quiz questions
// You can populate this with content from your Word file

const oopsData = {
    topics: [
        {
            title: "Introduction to OOPs",
            content: [
                "Object-Oriented Programming (OOP) is a programming paradigm based on the concept of 'objects', which can contain data and code.",
                "OOP focuses on organizing code into reusable, modular components called classes and objects.",
                "The main principles of OOP include:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Encapsulation - bundling data and methods together",
                        "Inheritance - creating new classes based on existing ones",
                        "Polymorphism - ability to take multiple forms",
                        "Abstraction - hiding complex implementation details"
                    ]
                }
            ]
        },
        {
            title: "Classes and Objects",
            content: [
                "A class is a blueprint or template for creating objects. It defines the properties (attributes) and behaviors (methods) that objects of that class will have.",
                "An object is an instance of a class. It represents a specific entity with its own set of values for the attributes defined in the class.",
                "Example:",
                {
                    type: "code",
                    code: `class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    start() {
        return \`\${this.brand} \${this.model} is starting...\`;
    }
}

// Creating an object
const myCar = new Car("Toyota", "Camry");
console.log(myCar.start());`
                }
            ]
        },
        {
            title: "Encapsulation",
            content: [
                "Encapsulation is the bundling of data and methods that operate on that data within a single unit (class).",
                "It helps in data hiding and protecting the internal state of an object from outside interference.",
                "Access modifiers (public, private, protected) control the visibility and accessibility of class members.",
                "Benefits:",
                {
                    type: "list",
                    ordered: false,
                    items: [
                        "Data security and integrity",
                        "Easier maintenance and debugging",
                        "Better code organization",
                        "Reduced complexity"
                    ]
                }
            ]
        },
        {
            title: "Inheritance",
            content: [
                "Inheritance allows a class (child/subclass) to inherit properties and methods from another class (parent/superclass).",
                "It promotes code reusability and establishes a relationship between classes.",
                "The child class can override parent methods or add new functionality.",
                "Example:",
                {
                    type: "code",
                    code: `class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return \`\${this.name} makes a sound\`;
    }
}

class Dog extends Animal {
    speak() {
        return \`\${this.name} barks\`;
    }
}`
                }
            ]
        },
        {
            title: "Polymorphism",
            content: [
                "Polymorphism means 'many forms'. It allows objects of different classes to be treated as objects of a common superclass.",
                "There are two types:",
                {
                    type: "list",
                    ordered: true,
                    items: [
                        "Compile-time polymorphism (Method Overloading)",
                        "Runtime polymorphism (Method Overriding)"
                    ]
                },
                "Polymorphism enables flexibility and extensibility in code design."
            ]
        },
        {
            title: "Abstraction",
            content: [
                "Abstraction is the process of hiding complex implementation details and showing only essential features.",
                "It helps in reducing complexity and allows programmers to focus on what an object does rather than how it does it.",
                "Abstract classes and interfaces are common ways to achieve abstraction.",
                "Benefits include simplified code, better security, and easier maintenance."
            ]
        }
    ],
    
    questions: [
        {
            question: "What does OOP stand for?",
            options: [
                "Object-Oriented Programming",
                "Object-Optimized Process",
                "Organized Object Protocol",
                "Oriented Object Process"
            ],
            correctAnswer: 0,
            explanation: "OOP stands for Object-Oriented Programming, a programming paradigm based on objects."
        },
        {
            question: "What is a class in OOP?",
            options: [
                "An instance of an object",
                "A blueprint for creating objects",
                "A method in a program",
                "A variable type"
            ],
            correctAnswer: 1,
            explanation: "A class is a blueprint or template that defines the structure and behavior of objects."
        },
        {
            question: "Which OOP principle involves bundling data and methods together?",
            options: [
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Abstraction"
            ],
            correctAnswer: 2,
            explanation: "Encapsulation is the principle of bundling data and methods that operate on that data within a single unit."
        },
        {
            question: "What allows a child class to inherit properties from a parent class?",
            options: [
                "Polymorphism",
                "Inheritance",
                "Encapsulation",
                "Abstraction"
            ],
            correctAnswer: 1,
            explanation: "Inheritance allows a child class to inherit properties and methods from a parent class."
        },
        {
            question: "What does polymorphism mean?",
            options: [
                "Many classes",
                "Many forms",
                "Many methods",
                "Many objects"
            ],
            correctAnswer: 1,
            explanation: "Polymorphism means 'many forms' and allows objects to take different forms."
        },
        {
            question: "Which principle hides complex implementation details?",
            options: [
                "Inheritance",
                "Polymorphism",
                "Encapsulation",
                "Abstraction"
            ],
            correctAnswer: 3,
            explanation: "Abstraction hides complex implementation details and shows only essential features."
        },
        {
            question: "An object is an instance of a:",
            options: [
                "Method",
                "Variable",
                "Class",
                "Function"
            ],
            correctAnswer: 2,
            explanation: "An object is an instance of a class, created using the class blueprint."
        },
        {
            question: "What is method overriding?",
            options: [
                "Creating multiple methods with the same name",
                "A child class providing its own implementation of a parent method",
                "Hiding a method",
                "Deleting a method"
            ],
            correctAnswer: 1,
            explanation: "Method overriding occurs when a child class provides its own implementation of a method inherited from the parent class."
        }
    ]
};
