14 JS Advanced: Exam Preparation June 2019
=======================================

---
---

Exam problems for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the
SoftUni Judge system at <https://judge.softuni.bg/Contests/Practice/Index/1664>.

---

14.01 Form Acceptance
---------------------

Use the **index.html** and **app.js** files to solve this problem.

**Note: You can't and you have no permission to change directly the given html code (index.html file).**

<img src="https://user-images.githubusercontent.com/32310938/64027598-b4548580-cb49-11e9-8f97-545582c5ceb8.png" alt="alt text" width="800" height="">

### Your Task

**Write the missing JavaScript code** to make the **Acceptance form** work as
expected:

-   When **all fields (company, product, quantity and scrape)** are **filled
    with correct input**

    -   **Company** and **product** need to be **non**-**empty strings**

    -   **Quantity** and **scrape** need to be **numbers**

-   Upon pressing the **[Add it] button**, a new stock (**product**) should
    appear in the warehouse list,  
    on following format:  
    **[{companyName}] {productName} - {productQuantity} pieces
    {outOfStockButton}**

    -   **Keep in mind that** you need to add the available quantity of the
        product that **is not scrape**. In these cases when the available
        product quantity is less or equal to zero (\<= 0) you should **not add
        it** to the warehouse list

    -   **If** one or all fields **are not filled,** you should do **nothing!**

-   The input fields should be **reset** when the **[Add it] button** is
    **clicked**!

-   When the **Out of stock** button is clicked, the current product (**the div
    element**) should **be removed** from the warehouse list

### Submission

Submit only your **acceptance()** function.

### Examples

**Before** we hit the **[Add it] button** with correct values for all the
fields:

<img src="https://user-images.githubusercontent.com/32310938/64027601-b7e80c80-cb49-11e9-9f2e-0de7fdeaf77d.png" alt="alt text" width="800" height="">

**After** we hit the **[Add it] button**

<img src="https://user-images.githubusercontent.com/32310938/64027605-b9b1d000-cb49-11e9-9b00-cd61eb92e07a.png" alt="alt text" width="800" height="">

**Code structure after** we hit the **[Add it] button** and we added
successfully a new product to the warehouse list:

<img src="https://user-images.githubusercontent.com/32310938/64027611-bc142a00-cb49-11e9-8d6d-77a7431593a1.png" alt="alt text" width="600" height="">

---


14.02 Vacation 
--------------

Exam problems for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the
SoftUni Judge system at <https://judge.softuni.bg/Contests/Practice/Index/1664>.

<img src="https://user-images.githubusercontent.com/32310938/64028486-693b7200-cb4b-11e9-848d-bcacfb6498fe.png" alt="alt text" width="600" height="">

Write a **Vacation class** which holds the information about school upcoming
vacation. Y**our class should contain the following functionality...**

### Constructor

Should have at least these **4 properties**:  
- **organizer**(String),  
- **destination**(String),  
- **budget**(Number),  
- **kids**(Object)

*And it must take 3 of them (organizer, destination, budget) in the constructor.
The kid's property by default must be empty.*

### Method - registerChild()

Accepts 3 properties **(name, grade, budget)**:

Stores **all kids** into the **kid's property** by their **grade**. Every grade
corresponds to **array** of all **kids** in there by following format:
**{name}-{budget}**

This method **checks** if the current kid’s budget is **enough** for the trip.
If it is not, it should **return** the following string:  
**'{name}'s money is not enough to go on vacation to {destination}.'**

Otherwise we **add it** if it is not already recorded in and **return the
current grade.**

If current kid is already into that **grade** the method should **return** the
following **string**:  
**'{name} is already in the list for this {destination} vacation.'**

### Method - removeChild()

Accepts 2 properties **(name, grade):**

**Removes** a kid from the **array** of already enrolled kids for this trip if
the current kid **exists** in there of course…

If the **name** of the **current kid exists** in the current grade, we
**remove** him and **return** the **current grade.**

If the given kid name does **not exist** in the given grade, we should
**return** the following **string**:  
**'We couldn't find {name} in {grade} grade.'**

### Method - toString() 

**Prints** all kids from the **kid's** property **sorted** in **ascending**
order by their **grade** into the following format:

**\`{organizer} will take {numberOfChildren} children on trip to {destination}**  
**\`Grade: {currentGrade}\`**  
**{currentKidNumber}. {kid}\`**  
**…**  
  
**\`Grade: {nextGrade}\`**  
**{currentKidNumber}. {kid}\`**  
**…**

The new line ("**\\n"**) after every kid or **grade is at the end**.

If there **are currently no kids** for the current trip, the kids property is
**empty** and you should **return** the following **string**:  
**\`No children are enrolled for the trip and the organization of
\${this.organizer} falls out...**\`  
**Check the example below for more clarity**.

### Getter numberOfChildren()

**Returns** the current **count** of **all kids** into the **kid's** property.

### Notes

**Names of all functions and getters and setters must be exactly the same as in
the description and examples!**

### Examples

| **Input 1**                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **let vacation = new Vacation('Mr Pesho', 'San diego', 2000);**<br/> *console*.log(*vacation*.registerChild(**'Gosho'**, 5, 2000));<br/> *console*.log(*vacation*.registerChild(**'Lilly'**, 6, 2100));<br/> *console*.log(*vacation*.registerChild(**'Pesho'**, 6, 2400));<br/> *console*.log(*vacation*.registerChild(**'Gosho'**, 5, 2000));<br/> *console*.log(*vacation*.registerChild(**'Tanya'**, 5, 6000));<br/> *console*.log(*vacation*.registerChild(**'Mitko'**, 10, 1590)); |
| **Output 1**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [ 'Gosho-2000' ]<br/> [ 'Lilly-2100' ]<br/> [ 'Lilly-2100', 'Pesho-2400' ]<br/> Gosho is already in the list for this San diego vacation.<br/> [ 'Gosho-2000', 'Tanya-6000' ]<br/> Mitko's money is not enough to go on vacation to San diego.                                                                                                                                                                                                                                      |

<br/>

| **Input 2**                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **let vacation = new Vacation('Mr Pesho', 'San diego', 2000);**<br/> *vacation*.registerChild(**'Gosho'**, 5, 2000);<br/> *vacation*.registerChild(**'Lilly'**, 6, 2100);<br/> *console*.log(*vacation*.removeChild(**'Gosho'**, 9));<br/> *vacation*.registerChild(**'Pesho'**, 6, 2400);<br/> *vacation*.registerChild(**'Gosho'**, 5, 2000);<br/> *console*.log(*vacation*.removeChild(**'Lilly'**, 6));<br/> *console*.log(*vacation*.registerChild(**'Tanya'**, 5, 6000))                |
| **Output 2**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| We couldn't find Gosho in 9 grade.<br/> [ 'Pesho-2400' ]<br/> [ 'Gosho-2000', 'Tanya-6000' ]                                                                                                                                                                                                                                                                                                                                                                         |

<br/>

| **Input 3**                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **let vacation = new Vacation('Miss Elizabeth', 'Dubai', 2000);**<br/> *vacation*.registerChild(**'Gosho'**, 5, 3000);<br/> *vacation*.registerChild(**'Lilly'**, 6, 1500);<br/> *vacation*.registerChild(**'Pesho'**, 7, 4000);<br/> *vacation*.registerChild(**'Tanya'**, 5, 5000);<br/> *vacation*.registerChild(**'Mitko'**, 10, 5500)<br/> *console*.log(*vacation*.toString());                                                                                                    |
| **Output 3**                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| Miss Elizabeth will take 4 children on trip to Dubai<br/> Grade: 5<br/> 1. Gosho-3000<br/> 2. Tanya-5000<br/><br/> Grade: 7<br/> 1. Pesho-4000<br/><br/> Grade: 10<br/> 1. Mitko-5500                                                                                                                                                                                                                                                                                                                   |

---

14.03 SoftUniFy (Unit Testing)
------------------------------

Exam problems for the [“JavaScript Advanced” course \@
SoftUni](https://softuni.bg/courses/javascript-advanced). Submit your solutions
in the SoftUni judge system at
<https://judge.softuni.bg/Contests/Practice/Index/1664#0>.
 
Use the provided **SoftUniFy** class to solve this problem.

### Functionality

An **instance** of the **SoftUniFy** class should support the following
operations:

-   Should contain **allSongs property** that is initialized as an **empty**
    object

-   **downloadSong(artist, song, lyrics) adds** the given information to the
    **allSongs** in format: **{artist**: {**rate**: **0**, **votes**: **0**,
    **songs: []}}**, **songs** property, should contain **all songs** from the
    current artist in format:  
    **[song1 - song1Lyrics, song2 - song2Lyrics....]**

-   **playSong(song) searches** all already downloaded songs and **returns**
    them in format:  
    **{artist}:**  
    **{song} – {lyrics}**  
    **...**  
    **If we do not have at least one downloaded song** or the one we have given
    is **not found** should **return the following string:**  
    **\`You have not downloaded a {song} song yet. Use SoftUniFy's function
    downloadSong() to change that!\`**

-   **songsList() gets all** already downloaded songs in format:  
    **{song1} - {song1Lyrics}**  
    **{song2} - {song2Lyrics}**  
    **{song3} - {song3Lyrics}**  
    ...  
    **If we do not have at least one downloaded song return the following
    string:**  
    **\`Your song list is empty\`**

-   **rateArtist() sums** the values of all votes on the current artist and
    return the **average rate.**  
    **Keep in mind that, this function has two overloads!**

### TODO

Using **Mocha** and **Chai** write **JS unit tests** to test the entire
functionality of the **SoftUniFy** class. You may use the following code as a
template:

**Wrap all the tests in one describe statement and submit it.**

<img src="https://user-images.githubusercontent.com/32310938/64029378-19f64100-cb4d-11e9-81e3-01ad04bfd912.png" alt="alt text" width="600" height="">

**Don't forget to require the chai library!**

### Examples

<img src="https://user-images.githubusercontent.com/32310938/64029448-414d0e00-cb4d-11e9-85cf-1601f1d7210e.png" alt="alt text" width="600" height="">

<img src="https://user-images.githubusercontent.com/32310938/64029522-69d50800-cb4d-11e9-87ab-eef7934446e6.png" alt="alt text" width="600" height="">

### Hints

**If at first look, you do not understand exactly how a certain function works,
just do your own tests by calling it to find out exactly what result
returns...**