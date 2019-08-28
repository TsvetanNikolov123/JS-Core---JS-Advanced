09 Lab: Classes
===============

---
---

Problems for exercises and homework for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the
SoftUni judge system at <https://judge.softuni.bg/Contests/1533>.

---

Classes
=======

09.01 Rectangle
---------------

Write a **class** for a rectangle object. It needs to have a **width** (Number),
**height** (Number) and **color** (String) properties, which are set from the
constructor and a **calcArea()** method, that calculates and **returns** the
rectangle’s area.

### Input

The constructor function will receive valid parameters.

### Output

The **calcArea()** method should **return** a number.

Submit the class definition as is, **without** wrapping it in any function.

### Examples

| Sample Input                                                                                                                                     | Output     |
|--------------------------------------------------------------------------------------------------------------------------------------------------|------------|
| let rect = new Rectangle(4, 5, 'red');<br/> console.log(rect.width);<br/> console.log(rect.height);<br/> console.log(rect.color);<br/> console.log(rect.calcArea()); | 4<br/> 5<br/> Red<br/> 20 |
<br/>

### Solution: <a title="01 Rectangle" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/01%20Rectangle/01.Rectangle.js">01 Rectangle</a>

---

09.02 Person
------------

Write a **class** that represents a personal record. It has the following
properties, all set from the constructor:

-   firstName

-   lastName

-   age

-   email

And a method **toString()**, which prints a summary of the information. See the
example for formatting details.

### Input

The constructor function will receive valid parameters.

### Output

The **toString()**method should **return** a string.

Submit the class definition as is, **without** wrapping it in any function.

### Example

| Sample Input                                                                                       |
|:--------------------------------------------------------------------------------------------------:|
| let person = new Person('Anna', 'Simpson', 22, 'anna\@yahoo.com'); console.log(person.toString()); |
| **Output**                                                                                             |
| Anna Simpson (age: 22, email: anna\@yahoo.com)                                                     |

<br/>

### Solution: <a title="02 Person" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/02%20Person/02.Person.js">02 Person</a>

---

09.03 Get Persons
-----------------

Write a function that returns an array of **Person** objects. Use the class from
the previous task, create the following instances, and return them in an array:

| First Name | Last Name | Age | Email           |
|------------|-----------|-----|-----------------|
| Anna       | Simpson   | 22  | anna\@yahoo.com |
| SoftUni    |           |     |                 |
| Stephan    | Johnson   | 25  |                 |
| Gabriel    | Peterson  | 24  | g.p\@gmail.com  |

For any empty cells, do not supply a parameter (call the constructor with less
parameters).

### Input / Output

There will be **no input**, the data is static and matches the table above. As
**output**, **return an array** with **Person instances**.

Submit a function that returns the required output.

<br/>

### Solution: <a title="03 Get Persons" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/03%20Get%20Persons/03.GetPersons.js">03 Get Persons</a>

---

09.04 Circle
------------

Write a **class** that represents a **Circle**. It has only one data property -
it’s **radius**, and it is set trough the **constructor**. The class needs to
have **getter** and **setter** methods for its **diameter** - the setter needs
to calculate the radius and change it and the getter needs to use the radius to
calculate the diameter and return it.

The circle also has a getter **area()**, which calculates and **returns** its
area.

### Input

The constructor function and diameter setter will receive valid parameters.

### Output

The **diameter()** and **area()** getters should **return** numbers.

Submit the class definition as is, **without** wrapping it in any function.

### Examples

| Sample Input                                                                                                                                                                                                                                                                       | Output                                            |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------|
| let c = new Circle(2);<br/> console.log(\`Radius: \${c.radius}\`);<br/> console.log(\`Diameter: \${c.diameter}\`);<br/> console.log(\`Area: \${c.area}\`);<br/> c.diameter = 1.6;<br/> console.log(\`Radius: \${c.radius}\`);<br/> console.log(\`Diameter: \${c.diameter}\`);<br/> console.log(\`Area: \${c.area}\`); | 2<br/> 4<br/> 12.566370614359172<br/><br/> 0.8<br/> 1.6<br/> 2.0106192982974678 |

<br/>

### Solution: <a title="04 Circle" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/04%20Circle/04.Circle.js">04 Circle</a>

---

09.05 Point Distance
--------------------

Write a JS **class** that represents a **Point**. It has **x** and **y**
coordinates as properties, that are set through the constructor, and a **static
method** for finding the distance between two points, called **distance()**.

### Input

The **distance()** method should receive two **Point** objects as parameters.

### Output

The **distance()** method should **return** a number, the distance between the
two point parameters.

Submit the class definition as is, **without** wrapping it in any function.

### Example

| Sample Input                                                                             | Output |
|------------------------------------------------------------------------------------------|--------|
| let p1 = new Point(5, 5);<br/> let p2 = new Point(9, 8);<br/> console.log(Point.distance(p1, p2)); | 5      |

<br/>

### Solution: <a title="05 Point Distance" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/05%20Point%20Distance/05.PointDistance.js">05 Point Distance</a>

---

09.06 Cards
-----------

You need to write an **IIFE** that results in an object containing two
properties **Card** which is a class and **Suits** which is an object that will
hold the possible suits for the cards.

The **Suits** object should have exactly these 4 properties:

-   **SPADES**: ♠

-   **HEARTS**: ♥

-   **DIAMONDS**: ♦

-   **CLUBS**: ♣

Where the key is **SPADES**, **HEARTS** e.t.c. and the value is the actual
symbol ♠, ♥ and so on.

The **Card** class should allow for creating cards, each card has 2 properties
**face** and **suit**. The **valid** faces are the following **["2", "3", "4",
"5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]** any other are considered
invalid.

The **Card** class should have **setters** and **getters** for the **face** and
**suit** properties, when creating a card or setting a property validations
should be performed, if an invalid face or a suit not in the **Suits** object is
passed an **Error** should be **thrown**.

### Code Template

You are required to write and submit an **IIFE** which results in an object
containing the above-mentioned **Card** and **Suits** as properties. Here is an
example template you can use:

<img src="https://user-images.githubusercontent.com/32310938/63890304-60338f00-c9eb-11e9-8d07-e4f05883c10b.png" alt="alt text" width="600" height="">                                                                           

### Screenshot

An example usage should look like this:

<img src="https://user-images.githubusercontent.com/32310938/63890397-907b2d80-c9eb-11e9-8f99-de60a85a700d.png" alt="alt text" width="600" height="">

<br/>

### Solution: <a title="06 Cards" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/06%20Cards/06.Cards.js">06 Cards</a>

---
---

Unit testing on Classes
=======================

09.07 String Builder
--------------------

You are given the following **JavaScript class**:

<img src="https://user-images.githubusercontent.com/32310938/63890493-ca4c3400-c9eb-11e9-9fb1-40f9f6db6965.png" alt="alt text" width="800" height="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |

### Functionality

The above code defines a **class** that holds **characters** (strings with
length 1) in an array. An **instance** of the class should support the following
operations:

-   Can be **instantiated** with a passed in **string** argument or **without**
    anything

-   Function **append(string)** - **converts** the passed in **string** argument
    to an **array** and adds it to the **end** of the storage

-   Function **prepend**(**string**) - **converts** the passed in **string**
    argument to an **array** and adds it to the **beginning** of the storage

-   Function **insertAt(string, index)** - **converts** the passed in **string**
    argument to an **array** and adds it at the **given** index (there is **no**
    need to check if the index is in range)

-   Function **remove(startIndex, length)** - **removes** elements from the
    storage, starting at the given index (**inclusive**), **length** number of
    characters (there is **no** need to check if the index is in range)

-   Function **toString()** - **returns** a string with **all** elements joined
    by an **empty** string

-   All passed in **arguments** should be **strings.** If any of them are
    **not**, **throws** a type **error** with the following message: "**Argument
    must be a string**"

### Example

This is an example how this code is **intended to be used**:

<img src="https://user-images.githubusercontent.com/32310938/63890693-2dd66180-c9ec-11e9-9b37-cdadf9e4abbb.png" alt="alt text" width="800" height="">

### Your Task

Using **Mocha** and **Chai** write **JS unit tests** to test the entire
functionality of the **StringBuilder** class. Make sure it is **correctly
defined as a class** and instances of it have all the required functionality.
You may use the following code as a template:

<img src="https://user-images.githubusercontent.com/32310938/63890861-7f7eec00-c9ec-11e9-9395-455886050823.png" alt="alt text" width="600" height="">

<br/>

### Solution: <a title="07 String Builder" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/07%20String%20Builder/string-builder.tests.js">07 String Builder</a>

---

09.08 Payment Package
---------------------

You are given the following **JavaScript class**:

<img src="https://user-images.githubusercontent.com/32310938/63891300-89edb580-c9ed-11e9-9a0b-32c6840710c3.png" alt="alt text" width="800" height="">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

### Functionality

The above code defines a **class** that contains information about a **payment
package**. An **instance** of the class should support the following operations:

-   Can be **instantiated** with two parameters - a string name and number value

-   Accessor **name** - used to get and set the value of name

-   Accessor **value** - used to get and set the value of value

-   Accessor **VAT** - used to get and set the value of VAT

-   Accessor **active** - used to get and set the value of active

-   Function **toString()** - return a string, containing an overview of the
    instance; if the package is **not active**, append the label
    "**(inactive)**" to the printed **name**

When creating an instance, or changing any of the property values, the
parameters are validated. They must follow these rules:

-   **name** - non-empty string

-   **value** - non-negative number

-   **VAT** - non-negative number

-   **active** - Boolean

If any of the requirements aren’t met, the operation must throw an error.

*Scroll down for examples and details about submitting to Judge.*

### Example

This is an example how this code is **intended to be used**:

<img src="https://user-images.githubusercontent.com/32310938/63891421-d1744180-c9ed-11e9-8ba6-fcbada5e6dc1.png" alt="alt text" width="700" height="">

### Your Task

Using **Mocha** and **Chai** write **unit tests** to test the entire
functionality of the **PaymentPackage** class. Make sure instances of it have
all the required functionality and validation. You may use the following code as
a template:

<img src="https://user-images.githubusercontent.com/32310938/63891481-f2d52d80-c9ed-11e9-833b-8074d9a42967.png" alt="alt text" width="700" height="">

<br/>

### Solution: <a title="08 Payment Package" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/09%20JS%20Classes/08%20Payment%20Package/PaymentPackage.tests.js">08 Payment Package</a>

---

