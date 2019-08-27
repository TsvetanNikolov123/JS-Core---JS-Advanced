05 Lab: DOM Manipulations
=========================

---
---

Problems for in-class lab for the ["JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/js-advanced)*"*. Submit your solutions in
the SoftUni judge system at
<https://judge.softuni.bg/Contests/1549/Lab-DOM-Manipulation>.

---

05.01 List of Items
-------------------

Write a **function** that **reads** the **text** inside an input field and
**appends** the specified text to a list inside an HTML page.

Submit **only** the **addItem()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Examples

<img src="https://user-images.githubusercontent.com/32310938/63798749-55a5c680-c913-11e9-82fc-7f9e86ca1078.png" alt="alt text" width="200" height="">⇒<img src="https://user-images.githubusercontent.com/32310938/63798755-58a0b700-c913-11e9-9b11-a9e3b9bb3c93.png" alt="alt text" width="200" height="">⇒<img src="https://user-images.githubusercontent.com/32310938/63798763-5c343e00-c913-11e9-9889-a848a0acf8f9.png" alt="alt text" width="200" height="">

<br/>

### Solution: <a title="01 List of Items" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/01.%20List-Of-Items/app.js">01 List of Items</a>

---

05.02 Add / Delete
------------------

Extend the previous problem to display a **[Delete] link** after each list item.
**Clicking** it should **delete** the item with no confirmation.

Submit **only** the **addItem()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Examples

<img src="https://user-images.githubusercontent.com/32310938/63798979-ccdb5a80-c913-11e9-8a64-814947583055.png" alt="alt text" width="250" height="">⇒<img src="https://user-images.githubusercontent.com/32310938/63799012-d82e8600-c913-11e9-9ea7-a3570ee0f6b0.png" alt="alt text" width="250" height="">

<br/>

### Solution: <a title="02 Add / Delete" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/02.%20Add-Delete/app.js">02 Add / Delete</a>

---

05.03 Delete from Table
-----------------------

Write a program that **takes** an **e-mail** from an **input field** and
**deletes** the matching row from a table. If no entry is found, an **error**
should be displayed in a **\<div\>** with ID "**results**". The error should be
"**Not found**." Submit **only** the **deleteByEmail()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Examples

><img src="https://user-images.githubusercontent.com/32310938/63799076-fdbb8f80-c913-11e9-9ded-705f51838e05.png" alt="alt text" width="500" height="">

<br/>

><img src="https://user-images.githubusercontent.com/32310938/63799081-001de980-c914-11e9-9b6b-c29f6e7f58e7.png" alt="alt text" width="500" height="">

<br/>

### Solution: <a title="03 Delete from Table" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/03.%20Delete-From-Table/app.js">03 Delete from Table</a>

---

05.04 Stopwatch
---------------

Write a **timer** that counts **minutes** and **seconds**. The user should be
able to control it with **buttons**. Clicking **[Start] starts** the
**counter.** Clicking **[Stop] resets** the timer back to **zero**. Only **one**
of the buttons should be **enabled** at a time (you cannot stop the timer, if it
is not running).

Submit only the **stopwatch()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Examples

<img src="https://user-images.githubusercontent.com/32310938/63799229-58ed8200-c914-11e9-9f5e-5ffd099865f4.png" alt="alt text" width="400" height="">

<br/>

### Solution: <a title="04 Stopwatch" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/04.%20Stopwatch/stopwatch.js">04 Stopwatch</a>

---

05.05 Mouse Gradient
--------------------

Write a program that **detects** and **displays** how far along a gradient the
user has **moved** their **mouse**. The result should be **rounded down** and
displayed as a **percentage** inside the **\<div\>** with ID "**result**".

Submit **only** the **attachGradientEvents()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Examples

<img src="https://user-images.githubusercontent.com/32310938/63799297-7fabb880-c914-11e9-88f9-030174d09aa0.png" alt="alt text" width="400" height="">

<br/>

### Solution: <a title="05 Mouse Gradient" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/05.%20Mouse-Gradient/app.js">05 Mouse Gradient</a>

---

05.06 Highlight Active
----------------------

Write a **function** that **highlights** the **currently active** section of a
document. There will be **multiple** divs with **input fields** inside them. Set
the **class** of the **div** that contains the **currently focused** input field
to "**focus**". When focus is lost (**blurred**), **remove the class** from the
element.

Submit only the **focus()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Example

<img src="https://user-images.githubusercontent.com/32310938/63813439-54d25c00-c936-11e9-9374-591eb85933a0.png" alt="alt text" width="300" height="">

<img src="https://user-images.githubusercontent.com/32310938/63813468-6d427680-c936-11e9-9aea-cf78d9d2685a.png" alt="alt text" width="300" height="">

<br/>

### Solution 1: <a title="06 Highlight Active" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/06.%20Highlight-Active/app.js">06 Highlight Active</a>
### Solution 2: <a title="06 Highlight Active" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/06.%2001.Highlight-Active/app.js">06 Highlight Active</a>

---

05.07 Dynamic Validation
------------------------

Write a **function** that **dynamically validates** an **email** input field
when it is **changed**. If the input is **invalid**, apply the style
"**error**". Do **not** validate on every keystroke, as it is annoying for the
user, consider only **change** events.

A valid email is considered to be in the format:
**\<name\>\@\<domain\>.\<extension\>**

Only **lowercase Latin characters** are allowed for any of the parts of the
email. If the input is valid, **clear** the style. Submit **only** the
**validate()** function in judge.

### Input/Output

There will be no input/output, your program should instead **modify** the DOM of
the given HTML document.

### Example

<img src="https://user-images.githubusercontent.com/32310938/63813507-9105bc80-c936-11e9-8975-8b1a88a06d9b.png" alt="alt text" width="300" height="">⇨<img src="https://user-images.githubusercontent.com/32310938/63813530-a24ec900-c936-11e9-86c3-b198f012ec58.png" alt="alt text" width="300" height="">

<br/>

### Solution: <a title="07 Dynamic Validation" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/05%20DOM%20Manipulations/07.%20Dynamic-Validation/app.js">07 Dynamic Validation</a>

---