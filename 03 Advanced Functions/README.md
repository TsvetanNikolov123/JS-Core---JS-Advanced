03 Lab: Advanced Functions
==============================

---
---

Problems for in-class lab for the [JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni judge system at <https://judge.softuni.bg/Contests/1528>.

---

03.01 Aggregates
----------------

Write a program that uses a **reducer** function to **display** information
about an **input array**.

### Input

You will receive an **array** of **numeric** values.

### Output

The output should be the **printed** on the console. Display the **sum** of all
elements in the array, the value of the **smallest**, the value of the
**biggest**, the **product** of all elements and a string of all elements
**concatenated**.

### Examples

| Sample Input        | Output                                                    |
|---------------------|-----------------------------------------------------------|
| [2, 3, 10, 5]       | Sum = 20 <br/> Min = 2 <br/> Max = 10 <br/> Product = 300 <br/> Join = 23105      |
| [5, -3, 20, 7, 0.5] | Sum = 29.5 <br/> Min = -3 <br/> Max = 20 <br/> Sum = -1050 <br/> Join = 5-32070.5 |


<br/>

### Solution: <a title="01 Aggregates" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/03%20Advanced%20Functions/01.Aggregates.js">01 Aggregates</a>

---

03.02 Currency Format
---------------------

Write a higher-order function that fixes some of the parameters of another
function. Your program will receive a function that **takes 4 parameters** and
**returns a formatted string** (a monetary value with currency symbol).

Your task is to **return another function** that only **takes one parameter**
and **returns** the **same formatted string**.

You will receive the following function:

| currencyFormatter                                                                                                                                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| function currencyFormatter(separator, symbol, symbolFirst, value) { <br/> &nbsp; &nbsp; let result = Math.trunc(value) + separator;<br/>&nbsp;&nbsp;&nbsp; result += value.toFixed(2).substr(-2,2);<br/> &nbsp;&nbsp;&nbsp; if (symbolFirst) return symbol + ' ' + result;<br/>&nbsp;&nbsp;&nbsp; else return result + ' ' + symbol; <br/>} |

Set the following parameters to fixed values:

separator: ","

symbol: "\$"

symbolFirst: true

The final parameter **value** is the one that the returned function will
receive.

### Input

You will receive a **function** parameter

### Output

You need to **return a function** that takes one parameter - **value**

### Examples

| Sample Input                                                                                                                                                                                              |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let dollarFormatter = result(currencyFormatter);<br/> console.log(dollarFormatter(5345)); *// \$ 5345,00* <br/> console.log(dollarFormatter(3.1429)); *// \$ 3,14* <br/> console.log(dollarFormatter(2.709)); *// \$ 2,71* |

<br/>

### Solution: <a title="02 Currency Format" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/03%20Advanced%20Functions/02.CurrencyFormat.js">02 Currency Format</a>

---

03.03 Command Processor
-----------------------

Write a program that keeps a string **inside its context** and can execute
different **commands** that modify or print the string on the console.

**append(string)** - append the given **string** at the end of the internal
string

**removeStart(n)** - **remove** the **first n** characters from the string,
**n** is an integer

**removeEnd(n)** - **remove** the **last n** characters from the string, **n**
is an integer

**print** - **print** the stored string on the **console**

### Input

Check the examples below to see how your code will be executed

### Output

Whenever you receive the command **print**, the output should be the **printed**
on the console.

### Examples

| Sample Input                                                                                                                                                                    | Output |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| let firstZeroTest = solution();<br/><br/> firstZeroTest.append('hello');<br/> firstZeroTest.append('again');<br/> firstZeroTest.removeStart(3);<br/> firstZeroTest.removeEnd(4);                         | loa    |
| let secondZeroTest = solution();<br/><br/> secondZeroTest.append('123');<br/> secontZeroTest.append('45');<br/> secondZeroTest.removeStart(2);<br/> secondZeroTest.removeEnd(1);<br/> secondZeroTest.print(); | 34     |

<br/>

### Solution 1: <a title="03 Command Processor" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/03%20Advanced%20Functions/03.CommandProcessor.js">03 Command Processor</a>
### Solution 2: <a title="03 Command Processor" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/03%20Advanced%20Functions/03.01.CommandProcessor.js">03 Command Processor</a>

---

03.04 Max Element
-----------------

Write a program that takes an **array** of **numeric elements** as an input and
**returns** the **largest** element of the array.

### Input

You will receive an **array** of **numbers**.

### Output

The **output** should be the **return** value of your function. It represents
the **largest element** of the array.

### Examples

| Sample Input     | Output |
|------------------|--------|
| [10, 20, 5]      | 20     |
| [1, 44, 123, 33] | 123    |

<br/>

### Solution: <a title="04 Max Element" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/03%20Advanced%20Functions/04.MaxElement.js">04 Max Element</a>

---

03.05 Next Article
------------------

Write a JS program that sequentially **displays articles** on a web page when
the user **clicks** a button. You will receive an **array of strings** that will
initialize the program. You need to **return** a function that **keeps the
initial array** in its **closure** and every time it is called, it **takes the
first element** from the array and **displays it** on the web page, inside a div
with ID "**content**". If there are no more elements left, your function
shouldn’t do anything.

Your function will be called automatically, there is **no need** to attach any
event listeners.

### Input

You will receive and **array** of strings.

### Output

Return a **function** that displays the array elements on the web page.

### Examples

<img src="https://user-images.githubusercontent.com/32310938/63724612-db1c6e80-c860-11e9-81ed-8e3b67f407b2.png" alt="alt text" width="400" height="">
<br/>
<img src="https://user-images.githubusercontent.com/32310938/63724695-0c953a00-c861-11e9-9798-31cad1491e3d.png" alt="alt text" width="400" height="">
<br/>
<img src="https://user-images.githubusercontent.com/32310938/63724776-46664080-c861-11e9-97c1-638483aa9e4e.png" alt="alt text" width="400" height="">

<br/>

### Solution: <a title="05 Next Article" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/03%20Advanced%20Functions/05.%20Next%20Article/next-article.js">05 Next Article</a>

---