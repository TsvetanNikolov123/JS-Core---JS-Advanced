16 JS Advanced: Exam Preparation June 2019
==========================================

Problems for exam preparation for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1624#0>.

16.01. Coffee Bill
------------------

Use the given **resources** to solve this problem. You have **NO permission** to
directly change the given HTML code (**index.html** file).

### Your Task

Write the missing JavaScript function **addProduct()** to make the **[Add]**
button work as expected - when clicked **adds** the new product’s information to
the restaurant bill. The **[Add]** button should:

-   **Append** the **text** received from the **input boxes** as a **new row at
    the end** of the **table’s body**

-   **Add** the **new product’s price** to the **total** sum

    -   The price should be **bigger than 0**

-   **Clear** the **input boxes** after the **product’s information** is
    **submitted**

-   **Do nothing** if **either** of **text boxes** is **empty**

### Examples

<img src="https://user-images.githubusercontent.com/32310938/64029860-157e5800-cb4e-11e9-8fa7-aaa6857382b4.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/64029867-17e0b200-cb4e-11e9-9606-0f17b40c24d7.png" alt="alt text" width="600" height="">

### Submission

Submit only your **addProduct()** function.

<br/>

### Solution: <a title="01. Coffee Bill" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/16%20Exam%20Preparation/01%20Coffee%20Bill/solution.js">01. Coffee Bill</a>

---

16.02 Film Studio
-----------------

Exam problem for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni Judge system at <https://judge.softuni.bg/Contests/1586/>.

Use the provided **FilmStudio class** to solve this problem.

### Your Task

Using **Mocha** and **Chai** write **JS Unit Tests** to test the entire
functionality of the **FilmStudio class**. Make sure instances of it have all
the required functionality and validation. You may use the following code as a
template:

<img src="https://user-images.githubusercontent.com/32310938/64030229-d1d81e00-cb4e-11e9-8604-313645458c6d.png" alt="alt text" width="600" height="">

### Functionality

**filmStudio.js** defines a **class** that contains information about a **film
studio**. An **instance** of the class should support the following operations:

-   **Instantiation** with **one parameter** - a **string** representing the
    **film studio name,** and an **additional property** called "**films**" - an
    **empty array by default**.

-   Function **makeMovie()** - receives **two parameters**: a
    **string**(**filmName**) and an **array**(**roles**). This function
    **creates a film** in **object format** (**film name** and all **roles**).
    If the **name already exists**, the **filmName** received is **a sequel to
    the existing film** and its name must be **followed** by its number in the
    film series.

-   Function **casting()** - receives **two** parameters: a **string**
    (**actor**) and another **string** (**role**). If **our film studio**
    contains a **film** which has that **role**, the **given actor** gets it.
    Regardless of the outcome, there will always be a string as output.

-   Function **lookForProducer()** - receives **one** parameter - **filmName.**
    If the given **filmName** exists, the function **prints** its info (**film
    name** and **cast**…). Otherwise, an **error** is **thrown**.

### Examples

| Sample Code Usage                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let filmStudio = new FilmStudio('SU-Studio');<br/><br/> console.log(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy']));<br/> console.log(filmStudio.makeMovie('The Avengers', ['Iron-Man', 'Hulk', 'Arrow guy', 'Ant-man']));<br/> console.log(filmStudio.makeMovie('The New Avengers', ['Iron-Man', 'Thor', 'Hulk', 'Arrow guy', 'Black Panther']));                                                                                                                                                                                                                                                  |
| **Corresponding Output**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| { filmName: 'The Avengers',<br/> &nbsp;&nbsp;&nbsp;&nbsp;filmRoles:<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [ { role: 'Iron-Man', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Thor', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Hulk', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Arrow guy', actor: false } ] }<br/> { filmName: 'The Avengers 2',<br/>&nbsp;&nbsp;&nbsp;&nbsp; filmRoles:<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ { role: 'Iron-Man', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Hulk', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Arrow guy', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Ant-man', actor: false } ] }<br/> { filmName: 'The New Avengers',<br/>&nbsp;&nbsp;&nbsp;&nbsp; filmRoles:<br/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[ { role: 'Iron-Man', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Thor', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Hulk', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Arrow guy', actor: false },<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; { role: 'Black Panther', actor: false } ] } |

### Submission

Submit your tests inside a **describe()** statement, as shown above.

<br/>

### Solution: <a title="02 Film Studio" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/16%20Exam%20Preparation/02%20Film%20Studio/filmStudio.tests.js">02 Film Studio</a>

---

16.03 Hotel
-----------

Exam problems for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced).  
Submit your solutions in the SoftUni judge system at
<https://judge.softuni.bg/Contests/1586/>.


<img src="https://user-images.githubusercontent.com/32310938/64031034-5d9e7a00-cb50-11e9-92cc-bdef42aa8552.png" alt="alt text" width="400" height="">

Write a **JavaScript** class **Hotel** which has the following
**functionality**:

### Constructor

*You should implement at least these properties:*

-   **name** - string

-   **capacity** - number

-   **bookings** - array

-   **currentBookingNumber** - number, initialized as ‘**1**’

At **initialization** of the **Hotel class**, the **constructor** receives only
**2 parameters** (**name**, **capacity**).  
The **bookings** property needs to be **empty** by **default.**

-   The **name** property refers to the **hotel's name**.

-   The **capacity** property refers for the **count** of the **hotel's rooms**.

    -   The **single** rooms are **50 %** of the given **capacity**

    -   The **double** rooms are **30 %** of the given **capacity**

    -   The **maisonette** rooms are **20 %** of the given **capacity**

    -   **NOTE**: All room counts should be integers.

### Accessors

**roomsPricing - Returns** an **object**, containing the following properties:

-   **single: 50** (price per night)

-   **double: 90** (price per night)

-   **maisonette: 135** (price per night)

**servicesPricing - Returns** an **object**, containing the following
properties:

-   **food: 10** (per order)

-   **drink: 15** (per order)

-   **housekeeping: 25** (per order)

### Functions

#### **rentARoom({clientName}, {roomType}, {nights})**

Receive **3** parameters: **clientName** (string), **roomType** (string),
**nights** (number)

If the hotel has **available** rooms of the requested **roomType**, you should
create an **object** for the current client’s **booking** which contains
properties for (**client name**, **room type**, **nights**, and **room number**)
and **store** it into the **bookings** property.

-   You should also **increase** the **currentBookingNumber** by **1**. The
    first given **currentBookingNumber** is **1**.

-   You should also **decrease** the **capacity** of the requested **roomType**
    rooms by **1**.

Then you should return a **string**, in the following format:

"**Enjoy your time here Mr./Mrs. {clientName}. Your booking is
{currentBookingNumber}.**"

##### **Validations**

-   If there are **NO** available rooms of the requested **roomType**, the
    **function** should return a **string**, consisting of the message: "**No
    {roomType} rooms available!**"

    And for **each** of the **other available** room types, you should
    **append** a **string** to the **message** in the following format:

    "**Available {roomType} rooms: {roomTypeRoomsRemaining}.**"

    Example:

    "**No single rooms available! Available double rooms: 2. Available
    maisonette rooms: 1.**"

#### **roomService({currentBookingNumber}, {serviceType})**

Receive **two** parameters: **currentBookingNumber** (number) and
**serviceType** (string)

You should **create** an **additional property** for the **booking** with the
given **currentBookingNumber,** called **services** (array), and add the given
**serviceType** to it (if it is already created, **just** add the new
**serviceType** to it).

**NOTE**: The **services** property contains an array of **strings**
(**serviceTypes**). You may add the same **serviceType multiple times**.

Then you should return a **string**, in the following format:

"**Mr./Mrs. {clientName}, Your order for {serviceType} service has been
successful.**"

##### Validations

-   If the given **currentBookingNumber** is **invalid** (**non-existent**)  
    return the following string:  
    "**The booking {currentBookingNumber} is invalid.**"

-   If the **requested service** is **invalid,** return the following
    string**:**  
    **"We do not offer {serviceType} service."**

#### **checkOut({currentBookingNumber})**

Receive **one** parameter - **currentBookingNumber** (number)

You should **calculate** the due amount, as **totalMoney**, for the **booking**
with the given **currentBookingNumber**, depending on the **nights** spent and
the **price** of the **roomType**.

-   You should also **increase** the **capacity** of the given **roomType**
    rooms by **1**.

Then you should return a **string**, in the following format:

"**We hope you enjoyed your time here, Mr./Mrs. {clientName}. The total amount
of money you have to pay is {totalMoney} BGN.**"

If the **booking** contains **services**, you should calculate the total price
for all the **services**, as **totalServiceMoney**.

Then you should return a **string**, in the following format:

"**We hope you enjoyed your time here, Mr./Mrs. {clientName}. The total amount
of money you have to pay is {totalMoney + totalServiceMoney} BGN. You have used
additional room services, costing {totalServiceMoney} BGN.**"

##### Validations

-   If the given **currentBookingNumber** is **invalid** (**non-existent**)  
    return the following string:  
    "**The booking {currentBookingNumber} is invalid.**"

#### **report()**

This function represents the hotel's "database". Prints **information** about
**each booking**.

The information should be presented in the following format:

"**{hotelName.toUpperCase()} DATABASE:**  
**--------------------** (*separate the header and bookings information* - 20
dashes)  
**bookingNumber – {bookingNumber}**  
**clientName – {clientName}**  
**roomType – {roomType}**  
**nights – {nights}**  
**services: {services}** (Optional. Only for those bookings who have used room
services. The **services** should be **joined** with a **comma** and a
**space**.)  
**----------** (*booking separator* - 10 dashes)

...

##### **Validations**

-   If there are no bookings, **return** the following **string:**  
    "**{hotelName.toUpperCase()} DATABASE:**

    **--------------------** (*separate the header and bookings information* -
    20 dashes)

    **There are currently no bookings.**"

### Submission

Submit only the **Hotel class** as **JavaScript code**.

### Constraints

**The given capacity will greater or equal to 10.**

### Examples

| **Input 1**                                                                                                                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let hotel = new Hotel('HotUni', 10);<br/><br/> console.log(hotel.rentARoom('Peter', 'single', 4));<br/> console.log(hotel.rentARoom('Robert', 'double', 4));<br/> console.log(hotel.rentARoom('Geroge', 'maisonette', 6));                                                                                                    |
| **Output 1**                                                                                                                                                                                                                                                                                              |
| Enjoy your time here Mr./Mrs. Peter. Your booking is 1.<br/> Enjoy your time here Mr./Mrs. Robert. Your booking is 2.<br/> Enjoy your time here Mr./Mrs. Geroge. Your booking is 3.                                                                                                                                 |


| **Input 2**                                                                                                                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let hotel = new Hotel('HotUni', 10);<br/><br/> hotel.rentARoom('Peter', 'single', 4);<br/> hotel.rentARoom('Robert', 'double', 4);<br/> hotel.rentARoom('Geroge', 'maisonette', 6);<br/><br/> console.log(hotel.roomService(3, 'housekeeping'));<br/> console.log(hotel.roomService(3, 'drink'));<br/> console.log(hotel.roomService(2, 'room')); |
| **Output 2**                                                                                                                                                                                                                                                                                              |
| Mr./Mrs. Geroge, Your order for housekeeping service has been successful.<br/> Mr./Mrs. Geroge, Your order for drink service has been successful.<br/> We do not offer room service.                                                                                                                                |

| **Input 3**                                                                                                                                                                                                                                                                                               |
|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| let hotel = new Hotel('HotUni', 10);<br/><br/> hotel.rentARoom('Peter', 'single', 4);<br/> hotel.rentARoom('Robert', 'double', 4);<br/> hotel.rentARoom('Geroge', 'maisonette', 6);<br/><br/> hotel.roomService(3, 'housekeeping');<br/> hotel.roomService(3, 'drink');<br/> hotel.roomService(2, 'room');<br/><br/> console.log(hotel.report());           |
| **Output 3**                                                                                                                                                                                                                                                                                              |
| HOTUNI DATABASE:<br/> --------------------<br/> bookingNumber - 1<br/> clientName - Peter<br/> roomType - single<br/> nights - 4<br/> ----------<br/> bookingNumber - 2<br/> clientName - Robert<br/> roomType - double<br/> nights - 4<br/> ----------<br/> bookingNumber - 3<br/> clientName - Geroge<br/> roomType - maisonette<br/> nights - 6<br/> services: housekeeping, drink     |

<br/>

### Solution: <a title="03 Hotel" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/16%20Exam%20Preparation/03%20Hotel/03.Hotel.js">03 Hotel</a>

---