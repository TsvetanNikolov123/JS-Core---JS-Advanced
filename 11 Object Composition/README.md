11 Lab: Object Composition
==========================

Problems for exercises and homework for the ["JavaScript Advanced" course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni judge system at <https://judge.softuni.bg/Contests/1545>.

11.01 Order Rectangles
----------------------

You will be passed a few pairs of **widths** and **heights** of rectangles,
create **objects** to represent the rectangles. The objects should additionally
have two functions **area** - that returns the area of the rectangle and
**compareTo** - that compares the current rectangle with another and produces a
number signifying if the current rectangle is **smaller** (negative number),
**equal** (0) or **larger** (positive number) than the other rectangle.

### Input

The input will come as an **array of arrays** - every nested array will contain
exactly 2 numbers the **width** and the **height** of the rectangle.

### Output

The output must consist of an array of **rectangles** (objects) sorted by their
**area** in **descending** order as a **first** criteria and by their **width**
in **descending** order as a **second** criteria.

### Examples

| Input                    | Output                                                                                                                                                                                                |
|--------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [[10,5],[5,12]]          | [{width:5, height:12, area:function(), compareTo:function(other)},<br/> {width:10, height:5, area:funciton(),compareTo:function(other)}]                                                                   |
| [[10,5], [3,20], [5,12]] | [{width:5, height:12, area:function(), compareTo:function(other)},<br/> {width:3, height:20, area:funciton(),compareTo:function(other)},<br/> {width:10, height:5, area:funciton(),compareTo:function(other)}]] |

<br/>

### Solution: <a title="01 Order Rectangles" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/01%20Order%20Rectangles/01.OrderRectangles.js">01 Order Rectangles</a>

---

11.02 Fibonacci
---------------

Write a JS function that when called, returns the next Fibonacci number,
starting at 0, 1. Use a **closure** to keep the current number.

### Input

There will be no input.

### Output

The **output** must be a Fibonacci number and must be **returned** from the
function.

### Examples

| Sample exectuion                                                                                                                                                                                                        |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let fib = getFibonator(); console.log(fib()); *// 1* <br/>console.log(fib()); *// 1* <br/>console.log(fib()); *// 2*<br/> console.log(fib()); *// 3*<br/> console.log(fib()); *// 5*<br/> console.log(fib()); *// 8*<br/> console.log(fib()); *// 13* |

<br/>

### Solution: <a title="02 Fibonacci" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/02%20Fibonacci/02.Fibonacci.js">02 Fibonacci</a>

---

11.03 List Processor
--------------------

Using a closure, create an inner object to process list commands. The commands
supported should be the following:

-   **add \<string\>** - adds the following string in an inner collection.

-   **remove \<string\>** - removes all occurrences of the supplied
    **\<string\>** from the inner collection.

-   **print** - prints all elements of the inner collection joined by **","**.

### Input

The **input** will come as an **array of strings** - each string represents a
**command** to be executed from the command execution engine.

### Output

For every print command - you should print on the console the inner collection
joined by **","**

### Examples

| Input                                                                                | Output          |
|--------------------------------------------------------------------------------------|-----------------|
| [**'add hello'**, **'add again'**, **'remove hello'**, **'add again'**, **'print'**] | **again,again** |
| [**'add pesho'**, **'add george'**, **'add peter'**, **'remove peter'**,**'print'**] | pesho, george   |

<br/>

### Solution 1: <a title="03 List Processor" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/03%20List%20Processor/03.ListProcessor(Module).js">03 List Processor</a>
### Solution 2: <a title="03 List Processor" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/03%20List%20Processor/03.ListProcessor(RevealingModule).js">03 List Processor</a>
### Solution 3: <a title="03 List Processor" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/03%20List%20Processor/03.ListProcessor.js">03 List Processor</a>

---

11.04 Cars
----------

Write a closure that can create and modify objects. All created objects should
be **kept** and be accessible by **name**. You should support the following
functionality:

-   **create \<name\>** - creates an object with the supplied **\<name\>**

-   **create \<name\> inherits \<parentName\>** - creates an object with the
    given **\<name\>**, that inherits from the parent object with the
    **\<parentName\>**

-   **set \<name\> \<key\> \<value\>** - sets the property with key equal to
    **\<key\>** to **\<value\>** in the object with the supplied **\<name\>**.

-   **print \<name\>** - prints the object with the supplied **\<name\>** in the
    format **"\<key1\>:\<value1\>,\<key2\>:\<value2\>…"** - the printing should
    also print all **inherited properties** from parent objects. Inherited
    properties should come after own properties.

### Input

The **input** will come as an **array of strings** - each string represents a
**command** to be executed from your closure.

### Output

For every **print** command - you should print on the console all properties of
the object in the above mentioned format.

### Constraints

-   **All commands will always be valid, there will be no nonexistent or
    incorrect input.**

### Examples

| Input                                                                                                                         | Output                             |
|-------------------------------------------------------------------------------------------------------------------------------|------------------------------------|
| [**'create c1'**,<br/> **'create c2 inherit c1'**,<br/> **'set c1 color red'**,<br/> **'set c2 model new'**,<br/> **'print c1'**,<br/> **'print c2'**] | **color:red model:new,<br/> color:red** |

<br/>

### Solution: <a title="04 Cars" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/04%20Cars/04.Cars.js">04 Cars</a>

---

11.05 Sum
---------

Create a function which returns an object that can modify the DOM. The returned
object should support the following functionality:

-   **init(selector1, selector2, resultSelector)** - initializes the object to
    work with the elements corresponding to the supplied selectors.

-   **add()** - **adds** the numerical value of the element corresponding to
    **selector1** to the numerical value of the element corresponding to
    **selector2** and then writes the result in the element corresponding to
    **resultSelector**

-   **subtract()** - **subtracts** the numerical value of the element
    corresponding to **selector2** from the numerical value of the element
    corresponding to **selector1** and then writes the result in the element
    corresponding to **resultSelector**

### Input

There will be no input your function must only provide an object.

### Output

Your function should return an object that meets the specified requirements.

### Constraints

-   **All commands will always be valid, there will be no nonexistent or
    incorrect input.**

-   **All selectors will point to single textbox elements.**

### HTML

You are given the following HTML for testing purposes:

<img src="https://user-images.githubusercontent.com/32310938/63950337-77728b00-ca84-11e9-8c19-c45a081f02a3.png" alt="alt text" width="600" height="">

<br/>

### Solution: <a title="05 Sum" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/11%20Object%20Composition/05%20Sum/05.Sum.js">05 Sum</a>

---