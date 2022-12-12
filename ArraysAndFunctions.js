let array1 = [1, 5, 6, 9, 10, 14];

// print the 3rd element in array1
console.log(array1[2]);
// print the last element in array1
console.log(array1[array1.length - 1]);
// add 16 and 3 to array1
array1.push(16,3);
// sort the array, then print the 3rd element again
// did it change?
array1.sort(function(a, b){return a - b});//this sorts the numbers least 
                                          //to greatest  
console.log(array1[2]);//it did change becuase of this

// create a variable called myTodoList that holds an empty array
let myTodoList = [];
// add three todo items to the array using a built-in array method
myTodoList.push('go to the bank','pay water bill', 'xmas shopping');
console.log(myTodoList);
// remove the second item in the array
myTodoList.splice(1,1);
console.log(myTodoList);
// create another array, yourTodoList, and add two todo items
let yourTodoList = ['buy milk', 'water the plants'];
// create another array, ourTodoList
// combine myTodoList and yourTodoList into ourTodoList
let ourTodoList = myTodoList.concat(yourTodoList);
console.log(ourTodoList);

// sort the following array from Z-A
ourTodoList.sort();
console.log(ourTodoList);

// create a function called reverse that takes in parameter
// this function will return the opposite of whatever is passed in
// if its a boolean, return the opposite
// if its a number, or a string, return the reverse (i.e. 1234 becomes 4321, Name becomes emaN)
// if its an array, return the reversed array with each element reversed

function reverse(parameter){
    if(typeof(parameter)=== 'boolean'){
        console.log(!parameter);
        return !parameter;
    }else if(typeof(parameter) === 'string' || typeof(parameter) === 'number'){
        //breaks the string or number into an array of all the characters
        let splitParameter = parameter.split("");
        //console.log(splitParameter);
        //now the new array will be flipped around
        let reverseParameter = splitParameter.reverse();
        //console.log(reverseParameter);
        //and finally putting it back together into one object
        let rejoinParameter = reverseParameter.join("");
        console.log(rejoinParameter);
        return rejoinParameter;
    }else {
        parameter.reverse();
        console.log(parameter);
    }  
}
reverse(true);
reverse('12345');
reverse(array1);

// create a function called addingMachine that will add all passed numbers and return the total
// Note: you don't know how many numbers will be passed
function addingMachine(){
    console.log(arguments);
                                    //    v this is the same as function(element){...}
    //Return the result of creating an array from arguments, reducing it to a
    //single value by adding each value to an accumulator.                 
    return Array.from(arguments).reduce((total, currentValue) => 
            total + currentValue
    );
}
console.log(JSON.stringify(addingMachine(1,2,3)));