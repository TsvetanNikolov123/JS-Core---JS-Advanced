06 Exercise: DOM Manipulations
==============================

---
---

Problems for exercises and homework for the ["JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/js-advanced)*"*. Submit your solutions in
the SoftUni judge system at
<https://judge.softuni.bg/Contests/1550/Exercise-DOM-Manipulations>.

---

06.01 Subtraction
-----------------

An HTML page holds **two text fields** with ids "**firstNumber**" and
"**secondNumber**". Write a function to **subtract** the values from these text
fields and display the result in the **div** named "**result**".

### HTML and JavaScript Code

Implement the above to provide the following functionality:

-   Your function should take the values of "**firstNumber**" and
    "**secondNumber**", **convert** them to numbers, **subtract** the second
    number from the first one and then append the result to the **\<div\>** with
    **id="result"**.

-   Your function should be able to work with **any 2 numbers** in the inputs,
    not only the ones given in the example.

### Example

<img src="https://user-images.githubusercontent.com/32310938/63814495-bba54480-c939-11e9-8793-3988a7e0d70e.png" alt="alt text" width="400" height="">

### Hints

We see that the **textboxes** and the **div** have **id** attributes on them.  


<img src="https://user-images.githubusercontent.com/32310938/63814634-3bcbaa00-c93a-11e9-8932-e439d9118cec.png" alt="alt text" width="500" height="">

<br/>

We can take the numbers directly from the input field by using the
**getElementById()** function. After we have taken the elements from the DOM,
it’s time to do the actual work. We get the values of the two **textboxes**, the
value of a textbox, as one would expect, is **text**. In order to get a
**number**, we need to use a function to **parse them**.

<img src="https://user-images.githubusercontent.com/32310938/63814692-674e9480-c93a-11e9-892d-76c1c2131c2f.png" alt="alt text" width="600" height="">

<br/>

All that’s left now is to append the result to the **div**. We use the same
function to get the **result** element by id and change its **text content** to
the result of the **subtraction.**

<img src="https://user-images.githubusercontent.com/32310938/63814757-9f55d780-c93a-11e9-8196-716c18ddbbd7.png" alt="alt text" width="700" height="">

Our code is ready now. Submit only the **subtract()** function in judge.

<br/>

### Solution: <a title="01 Subtraction" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/01.%20Subtraction/subtract.js">01 Subtraction</a>

---

06.02 Fill Dropdown
-------------------

Your task is to take values from **input** fields with **ids "newItemText"** and
**"newItemValue"**. Then you should create and append an **\<option\>** to the
**\<select\>** with **id "menu".**

### Example

<img src="https://user-images.githubusercontent.com/32310938/63814796-c6aca480-c93a-11e9-9edb-a47fa018a081.png" alt="alt text" width="600" height="">

### Hints

-   Your function should take the values of **newItemText** and
    **newItemValue**. After that you should create a new **option** element and
    set its **textContent** and its **value** to the newly taken ones.

-   Once you have done all of that, you should **append** the newly created
    **option** as a **child** to the **select** item with id **"menu".**

-   Finally, you should **clear** the value of the two **input** fields.

<br/>

### Solution: <a title="02 Fill Dropdown" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/02.%20Fill-Dropdown/dropdown.js">02 Fill Dropdown</a>

---

06.03 Accordion
---------------

An **html** file is given and your task is to show **more**/**less** information
by clicking a **[ADD] button** (it is not an actual button, but a **span** that
has an **onclick** event attached to it). When **[More] button** is clicked, it
**reveals** the content of a **hidden** div and **changes** the text of the
button to **[Less]**. When the same link is clicked **again** (now reading
**Less**), **hide** the div and **change** the text of the link to **More**.
Link action should be **toggleable** (you should be able to click the button
infinite amount of times).

### Example

<img src="https://user-images.githubusercontent.com/32310938/63814827-e47a0980-c93a-11e9-8307-a3fbc71cf263.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/63814832-e6dc6380-c93a-11e9-8108-5212df6cea11.png" alt="alt text" width="600" height="">

### Hints

-   To **change** the text content of a button, you could use
    **getElementsByClassName**. However, that returns a **collection** and we
    need only **one** element from it, so the correct way is to **use
    getElementsByClassName("button")[0]** as it will return the needed span
    element.

-   After that we should change the **display style** of the div with an **id**
    "**extra**". If the display style is "**none**", we should **change** it to
    "**block**" and the **opposite**.

-   Along with all of this, we should **change** the text content of the
    **button** to **[Less]**/[**More]**.

<br/>

### Solution: <a title="03 Accordion" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/03.%20Accordion/accordion.js">03 Accordion</a>

---

06.04 Sections
--------------

You will receive an **array** of strings. For each string, create a **div** with
a **paragraph** with the **string** in it. Each paragraph is initially **hidden
(display:none)**. Add a **click event listener** to **each div** that
**displays** the **hidden** paragraph. Finally, you should **append** all divs
to the element with an **id** "**content**".

### Example

<img src="https://user-images.githubusercontent.com/32310938/63814932-52becc00-c93b-11e9-81ec-912e2bbd1d4b.png" alt="alt text" width="300" height=""> ➪ <img src="https://user-images.githubusercontent.com/32310938/63814934-54888f80-c93b-11e9-9e97-63b42c2ec169.png" alt="alt text" width="300" height="">

<br/>

### Solution: <a title="04 Sections" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/04.%20Sections/script.js">04 Sections</a>

---

06.05 Notification
------------------

Write a **function** that receives a string **message** and **displays** it
inside a div with an id "**notification**" for 2 seconds. The div is initially
**hidden** and when the function is called, it must be **shown**. After 2
seconds, **hide** the div. In the example below, a notification is shown when
you **click** the button.
### Example

<img src="https://user-images.githubusercontent.com/32310938/63815036-bc3eda80-c93b-11e9-8d85-54b38ddeb1e0.png" alt="alt text" width="600" height="">

When we click the [**GET NOTIFIED**] **button**, a **div** appears in our
upper-right corner. It should **disappear** in 2 seconds.

<br/>

### Solution: <a title="05 Notification" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/05.%20Notification/scripts.js">05 Notification</a>

---

06.06 Time Converter
--------------------

Create a program that **converts** different time units. Your task is to add a
**click** event listener to **all** [**CONVERT**] **buttons**. When a button is
**clicked**, read the **corresponding** input field, **convert** the value to
the **three other** time units and **display** it in the input fields.

### Example

<img src="https://user-images.githubusercontent.com/32310938/63815065-d8db1280-c93b-11e9-94e8-6281bb7f148e.png" alt="alt text" width="600" height="">

One day is equal to 24 hours/1440 minutes/86400 seconds. Whichever button we
**click,** the input fields should **change** depending on the added value on
the left. (For example, if we write 48 hours and click convert the days, the
field value should change to 2).

<br/>

### Solution: <a title="06 Time Converter" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/06.%20Time-Converter/solution.js">06 Time Converter</a>

---

06.07 Locked Profile
--------------------

In this problem, you should **create a JS functonality** which **shows** and
**hides** the additional

information about users.

<img src="https://user-images.githubusercontent.com/32310938/63815350-fa88c980-c93c-11e9-90c1-16cc698e76e6.png" alt="alt text" width="600" height="">

When one of the [**Show more**] **buttons** is clicked, the **hiden
information** inside the div should

be shown, only if **the profile is not locked**! If the current profile is
**locked,** nothing should

happen.

<img src="https://user-images.githubusercontent.com/32310938/63815388-0e343000-c93d-11e9-95d2-ea503d9a5fb2.png" alt="alt text" width="600" height="">

If the **hidden information is displayed** and we **lock the profile again**,
the [**Hide it**] button

should **not be working**! Otherwise, when the profile is **unlocked** and we
click on the **[Hide it]**

button, the new fields must hide again.

<br/>

### Solution: <a title="07 Locked Profile" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/07.%20Locked-Profile/app.js">07 Locked Profile</a>

---

06.08 Encode and Decode Messages
--------------------------------

In this problem, you should **create a JS functonality** which **encodes and
decodes some**

**messages which travel to the network.**

<img src="https://user-images.githubusercontent.com/32310938/63815418-30c64900-c93d-11e9-803a-8e40f81bf543.png" alt="alt text" width="600" height="">

This program should contain **two functionalities**.

The first one is to **encode the given message** and **send it** to the
**receiver**.

The second one is to **decode the received message** and **read it (display
it)**.

When the [**Encode and send it**] **button** is clicked, you should get the
given message from the first textarea. When you get the current message, you
should encode it as follows:

-   **Change** the **ASCII CODE** on **every single character** in that message
    when you **add 1** to the current **ASCII NUMBER**, that represent the
    current character in that message

-   **Clear** the **sender textarea** and **append** the encoded message to the
    **receiver textarea**

<img src="https://user-images.githubusercontent.com/32310938/63815436-37ed5700-c93d-11e9-843b-dc2854265d5d.png" alt="alt text" width="600" height="">

*After clicking [Encode and send it] button the result should be:*

<img src="https://user-images.githubusercontent.com/32310938/63815438-3a4fb100-c93d-11e9-886c-1a5ab83cdc45.png" alt="alt text" width="600" height="">

After that, when the [**Decode and read it**] **button** is clicked. You need to
get the **encoded message** from **the receiver textarea** and do the **opposite
logic** from encoding:

-   **Subtract 1** from the current **ASCII NUMBER**, that represents the
    current character in that message

-   Replace the **encoded message** with the already **decoded message** in the
    receiver textarea, to make it readable

<img src="https://user-images.githubusercontent.com/32310938/63815445-3facfb80-c93d-11e9-9670-760231a6f7b3.png" alt="alt text" width="600" height="">

<br/>

### Solution: <a title="08 Encode and Decode Messages" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/08.%20Encode-and-Decode-Messages/app.js">08 Encode and Decode Messages</a>

---

06.09 \* Distance Converter
---------------------------

Your task is to convert from **one** distance unit to **another** by adding a
**click** event listener to a button. When it is clicked, **read** the value
from the input field and **get** the **selected** option from the **input** and
**output** units drop downs. Then **calculate** and **display** the converted
value in the **disabled** output field.

### Example

<img src="https://user-images.githubusercontent.com/32310938/63815510-8864b480-c93d-11e9-8690-c833b047dd1d.png" alt="alt text" width="600" height="">

### Hints

-   Multiply the incoming distance by the following conversion rates to convert
    to meter

-   Divide to convert from meters to the required output unit

-   To see which option is selected, read the properties of its parent:
    **value** gives you the value of the selected option (as displayed in the
    HTML), **selectedIndex** gives you the 0-based index of the selected option.
    For example, if miles are selected, **inputUnits.value** is "**mi**",
    **inputUnits.selectedIndex** is **4**. Option text is irrelevant

-   Use the following table information to do that:

| **1 km**  | **1000 m**    |
|-----------|---------------|
| **1 m**   | **1 m**       |
| **1 cm**  | **0.01 m**    |
| **1 mm**  | **0.001 m**   |
| **1 mi**  | **1609.34 m** |
| **1 yrd** | **0.9144 m**  |
| **1 ft**  | **0.3048 m**  |
| **1 in**  | **0.0254 m**  |

<br/>

### Solution: <a title="09 Distance Converter" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/06%20DOM%20Manipulations%20Exercise/09.%20Distance-Converter/distanceConverter.js">09 \* Distance Converter</a>

---