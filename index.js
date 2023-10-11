
/*Q1. Write a program to find all pairs of an integer array whose sum is equal to a given number?*/

function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seenNumbers = new Set();

    for (let num of arr) {
        const complement = targetSum - num;
        
        if (seenNumbers.has(complement)) {
            pairs.push([num, complement]);
        }

        seenNumbers.add(num);
    }

    return pairs;
}

const array = [2, 4, 3, 5, 6, -2, 8, 7];
const target = 9;

const result = findPairsWithSum(array, target);

if (result.length > 0) {
    console.log(`Pairs with sum ${target}:`);
    result.forEach(pair => {
        console.log(`[${pair[0]}, ${pair[1]}]`);
    });
} else {
    console.log(`No pairs found with sum ${target}`);
}

/*Q2. Write a program to reverse an array in place? In place means you cannot create a new array. 
You have to update the original array.*/


function reverseArrayInPlace(arr) {
    const length = arr.length;
    const halfLength = Math.floor(length / 2);

    for (let i = 0; i < halfLength; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
}

const array1 = [1, 2, 3, 4, 5];
console.log("Original array:", array1);

reverseArrayInPlace(array1);
console.log("Reversed array:", array1);

/*Q3. Write a program to check if two strings are a rotation of each other? */

function areRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const concatenatedStr = str1 + str1;

    return concatenatedStr.includes(str2);
}

const string1 = "abcdef";
const string2 = "defabc";

if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
} else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
}

/*Q4. Write a program to print the first non-repeated character from a string?*/

function firstNonRepeatedCharacter(str) {
    const charCount = {};

    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}

const inputString = "hackerrank";
const result1 = firstNonRepeatedCharacter(inputString);

if (result1 !== null) {
    console.log(`The first non-repeated character in "${inputString}" is: ${result1}`);
} else {
    console.log(`No non-repeated characters found in "${inputString}"`);
}



/*Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.*/


function towerOfHanoi(n, source, auxiliary, destination) {
    if (n === 1) {
        console.log(`Move disk 1 from ${source} to ${destination}`);
        return;
    }

    towerOfHanoi(n - 1, source, destination, auxiliary);
    console.log(`Move disk ${n} from ${source} to ${destination}`);
    towerOfHanoi(n - 1, auxiliary, source, destination);
}

const numDisks = 3;
const sourcePeg = 'A';
const auxiliaryPeg = 'B';
const destinationPeg = 'C';

towerOfHanoi(numDisks, sourcePeg,auxiliaryPeg,destinationPeg)

 /* Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.*/


function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}

function postfixToPrefix(postfix) {
    const stack = [];

    for (let char of postfix) {
        if (!isOperator(char)) {
            stack.push(char);
        } else {
            const operand2 = stack.pop();
            const operand1 = stack.pop();
            const expression = char + operand1 + operand2;
            stack.push(expression);
        }
    }

    return stack.pop();
}

const postfixExpression = "23*5+";
const prefixExpression = postfixToPrefix(postfixExpression);

console.log(`Postfix expression: ${postfixExpression}`);
console.log(`Prefix expression: ${prefixExpression}`);



 /*Q7. Write a program to convert prefix expression to infix expression.*/


function isOperator(character) {
    return ['+', '-', '*', '/'].includes(character);
}

function prefixToInfix(prefix) {
    const stack = [];

    for (let i = prefix.length - 1; i >= 0; i--) {
        const char = prefix[i];
        if (!isOperator(char)) {
            stack.push(char);
        } else {
            const operand1 = stack.pop();
            const operand2 = stack.pop();
            const expression = `(${operand1}${char}${operand2})`;
            stack.push(expression);
        }
    }

    return stack.pop();
}

const prefixExpression1 = "+*23+45";
const infixExpression = prefixToInfix(prefixExpression1);

console.log(`Prefix expression: ${prefixExpression1}`);
console.log(`Infix expression: ${infixExpression}`);




/*Q8. Write a program to check if all the brackets are closed in a given code snippet.*/


function areBracketsClosed(code) {
    const stack = [];
    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];
    
    for (let char of code) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            const lastOpeningBracket = stack.pop();
            const correspondingOpeningBracket = openingBrackets[closingBrackets.indexOf(char)];
            
            if (lastOpeningBracket !== correspondingOpeningBracket) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
}

const codeSnippet = "function myFunction() { return [1, 2, (3 + 4)]; }";
const result = areBracketsClosed(codeSnippet);

if (result) {
    console.log("All brackets are closed properly.");
} else {
    console.log("Brackets are not closed properly.");
}


/*Q9. Write a program to reverse a stack.*/



class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
    const auxStack = new Stack();

    while (!stack.isEmpty()) {
        auxStack.push(stack.pop());
    }

    return auxStack;
}

const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);

console.log("Original stack:", originalStack.items);

const reversedStack = reverseStack(originalStack);

console.log("Reversed stack:", reversedStack.items);


// /*Q10. Write a program to find the smallest number using a stack.*/

class Stack1 {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class MinStack {
    constructor() {
        this.stack = new Stack1();
        this.minStack = new Stack1();
    }

    push(item) {
        this.stack.push(item);

        if (this.minStack.isEmpty() || item <= this.minStack.peek()) {
            this.minStack.push(item);
        }
    }

    pop() {
        if (!this.stack1.isEmpty()) {
            const poppedItem = this.stack1.pop();

            if (poppedItem === this.minStack.peek()) {
                this.minStack.pop();
            }

            return poppedItem;
        }
    }

    getMin() {
        if (!this.minStack.isEmpty()) {
            return this.minStack.peek();
        }
    }
}

const minStack = new MinStack();
minStack.push(4);
minStack.push(2);
minStack.push(6);
minStack.push(-988);
minStack.push(-93);
minStack.push(0);

console.log("Smallest number:", minStack.getMin());