08 Exercise: Unit Testing and Modules
=====================================

---
---

Problems for exercises and homework for the ["JavaScript Advanced" course \@
SoftUni](https://softuni.bg/courses/js-advanced). Submit your solutions in the
SoftUni judge system at <https://judge.softuni.bg/Contests/1532>

---

Error Handling
==============

08.01 Request Validator
-----------------------

Write a function that **validates** an **HTTP request object**. The object has
the properties **method**, **uri**, **version** and **message**. Your function
will receive **the object as a parameter** and has to **verify** that **each
property** meets the following **requirements**:

-   **method** - can be **GET**, **POST**, **DELETE** or **CONNECT**

-   **uri** - must be a valid resource address or an asterisk (**\***); a
    resource address is a combination of alphanumeric characters and periods;
    all letters are Latin; the **URI cannot** be an empty string

-   **version** - can be **HTTP/0.9**, **HTTP/1.0**, **HTTP/1.1** or
    **HTTP/2.0** supplied as a string

-   **message** - may contain **any number** or non-special characters;special
    characters are **\<**, **\>**, **\\**, **&**, **'**, **"**

If a request is **valid**, return it **unchanged**.

If any part **fails** the check, **throw an Error** with message "**Invalid
request header: Invalid {Method/URI/Version/Message}**".

Replace the part in curly braces with the relevant word. Note that some of the
**properties may be missing**, in which case the request is **invalid**. Check
the properties **in the order** in which they are listed above. If **more than**
one property is **invalid**, **throw an error** for the **first** encountered.

### Input / Output

Your function will receive an **object** as a parameter. **Return** the same
object or **throw an Error** as described above as an output.

### Examples

| Input                                                                                | Output                                                                         |
|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|
| { <br/>&nbsp;&nbsp;&nbsp;&nbsp;method: 'GET',<br/>&nbsp;&nbsp;&nbsp;&nbsp;uri: 'svn.public.catalog',<br/>&nbsp;&nbsp;&nbsp;&nbsp;version: 'HTTP/1.1',<br/>&nbsp;&nbsp;&nbsp;&nbsp;message: '' <br/>}       | { <br/>&nbsp;&nbsp;&nbsp;&nbsp;method: 'GET',<br/>&nbsp;&nbsp;&nbsp;&nbsp;uri: 'svn.public.catalog',<br/>&nbsp;&nbsp;&nbsp;&nbsp;version: 'HTTP/1.1',<br/>&nbsp;&nbsp;&nbsp;&nbsp;message: '' <br/>} |
| { <br/>&nbsp;&nbsp;&nbsp;&nbsp;method: 'OPTIONS',<br/>&nbsp;&nbsp;&nbsp;&nbsp;uri: 'git.master',<br/>&nbsp;&nbsp;&nbsp;&nbsp;version: 'HTTP/1.1',<br/>&nbsp;&nbsp;&nbsp;&nbsp;message: '-recursive' <br/>} | Invalid request header: Invalid Method                                         |
| { <br/>&nbsp;&nbsp;&nbsp;&nbsp;method: 'POST',<br/>&nbsp;&nbsp;&nbsp;&nbsp;uri: 'home.bash',<br/>&nbsp;&nbsp;&nbsp;&nbsp;message: 'rm -rf /\*' <br/>}                          | Invalid request header: Invalid Version                                        |

### Hints

Since validating some of the fields may require the use of **RegExp**, you can
check your expressions using the following samples:

| URI                                                         |                                                  |
|-------------------------------------------------------------|--------------------------------------------------|
| **Valid**                                                   | **Invalid**                                          |
| svn.public.catalog <br/>git.master<br/> version1.0<br/> for..of<br/> .babelrc<br/> c | %appdata%<br/> apt-get<br/> <br/>home\$<br/> define apps<br/> "documents" |

-   Note that the **URI cannot** be an **empty string**.

| Message                                                                        |                                                                                   |
|--------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| **Valid**                                                                      | **Invalid**                                                                           |
| \-recursive<br/> rm -rf /\*<br/> hello world<br/> https://svn.myservice.com/downloads/<br/> %root% | \<script\>alert("xss vulnerable")\</script\><br/> \\r\\n<br/> \&copy;<br/> "value" <br/>'; DROP TABLE |

-   Note that the message **may** be an **empty string**, but the property must
    still be present.

<br/>

### Solution: <a title="01 Request Validator" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/08%20Unit%20Testing%20And%20Modules%20Exercise/01%20Request%20Validator/01.RequestValidator.js">01 Request Validator</a>

---
---

Unit Testing
============

You are required to **submit only the unit tests** for the
**object**/**function** you are testing.

---

08.02 Even or Odd
-----------------

You need to write **unit tests** for a function **isOddOrEven()** that checks
whether the **length** of a passed in **string** is **even** or **odd**.

If the passed parameter is **NOT** a string **return undefined**. If the
parameter is a string **return** either **"even"** or **"odd"** based on the
**length** of the string.

### JS Code

You are provided with an implementation of the **isOddOrEven()** function:

<img src="https://user-images.githubusercontent.com/32310938/63886177-8f91ce00-c9e2-11e9-8fa8-454a32825481.png" alt="alt text" width="600" height="">

### Hints

We can clearly see there are three outcomes for the function:

-   Returning **undefined**

-   Returning **"even"**

-   Returning **"odd"**

Write one or two tests passing parameters that are **NOT** of **type string** to
the function and **expecting** it to **return undefined**.

<img src="https://user-images.githubusercontent.com/32310938/63886265-c49e2080-c9e2-11e9-828f-cd2017707bb1.png" alt="alt text" width="700" height="">

After we have checked the validation it's time to check whether the function
works correctly with valid arguments. Write a test for each of the cases:

One where we pass a string with **even** length:

<img src="https://user-images.githubusercontent.com/32310938/63886313-e0a1c200-c9e2-11e9-9f14-c1daf7f38142.png" alt="alt text" width="700" height="">

And one where we pass a string with an **odd** length:

<img src="https://user-images.githubusercontent.com/32310938/63886330-ea2b2a00-c9e2-11e9-84a4-79e481913b90.png" alt="alt text" width="700" height="">

Finally make an extra test passing **multiple different strings** in a row to
ensure the function works correctly:

<img src="https://user-images.githubusercontent.com/32310938/63886353-f6af8280-c9e2-11e9-8d6b-d450b817bf8d.png" alt="alt text" width="700" height="">

<br/>

### Solution: <a title="02 Even or Odd" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/08%20Unit%20Testing%20And%20Modules%20Exercise/02%20Even%20Or%20Odd/isOddOrEven.tests.js">02 Even or Odd</a>

---

08.03 Char Lookup
-----------------

Write **unit tests** for a function that **retrieves a character** at a given
**index** from a passed in **string**.

You are given a function named **lookupChar()**, which has the following
functionality:

-   **lookupChar(string, index)** - accepts a **string** and an **integer** (the
    **index** of the char we want to lookup) :

    -   If the **first parameter** is **NOT a string** or the **second
        parameter** is **NOT a number** - **return undefined**.

    -   If **both parameters** are of the **correct type** but the value of the
        **index is incorrect** (bigger than or equal to the string length or a
        negative number) - **return "Incorrect index"**.

    -   If **both parameters** have **correct types** and **values** -
        **return** the **character at the specified index** in the string.

### JS Code

You are provided with an implementation of the **lookupChar()** function:

<img src="https://user-images.githubusercontent.com/32310938/63886439-28284e00-c9e3-11e9-9079-8b70fe223018.png" alt="alt text" width="600" height="">

### Hints

А good first step in testing a method is usually to determine all exit
conditions. Reading through the specification or taking a look at the
implementation we can easily determine **3 main exit conditions**:

-   Returning **undefined**

-   Returning an **empty string**

-   Returning the **char at the specified index**

Now that we have our exit conditions we should start checking in what situations
we can reach them. If any of the parameters are of **incorrect type**,
**undefined** should be returned.

<img src="https://user-images.githubusercontent.com/32310938/63886499-4aba6700-c9e3-11e9-993b-bc02fb07a007.png" alt="alt text" width="700" height="">

If we take a closer look at the implementation, we see that the check uses
**Number.isInteger()** instead of **typeof(index === number)** to check the
index. While **typeof** would protect us from getting passed an index that is a
non-number, it won’t protect us from being passed a **floating-point number**.
The specification says that **index** needs to be an **integer**, since floating
point numbers won’t work as indexes.

<img src="https://user-images.githubusercontent.com/32310938/63886697-c4525500-c9e3-11e9-8f47-c442a359fabc.png" alt="alt text" width="700" height="">

Moving on to the next **exit condition** - returning an **empty string** if we
get passed an index that is a **negative number** or an index which is **outside
of the bounds** of the string.

<img src="https://user-images.githubusercontent.com/32310938/63886718-d16f4400-c9e3-11e9-97d6-3343d1ee1fbc.png" alt="alt text" width="700" height="">

For the last exit condition - **returning a correct result**. A simple check for
the returned value will be enough.

<img src="https://user-images.githubusercontent.com/32310938/63886746-de8c3300-c9e3-11e9-91e0-40aca54adbd8.png" alt="alt text" width="700" height="">
  
With these last two tests we have covered the **lookupChar()** function.

<br/>

### Solution: <a title="03 Char Lookup" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/08%20Unit%20Testing%20And%20Modules%20Exercise/03%20Char%20Lookup/charLookUp.tests.js">03 Char Lookup</a>

---

08.04 Math Enforcer
-------------------

Your task is to test an object named **mathEnforcer**, which should have the
following functionality:

-   **addFive(num)** - A function that accepts a **single** parameter:

    -   If the **parameter** is **NOT a number**, the funtion should return
        **undefined**.

    -   If the **parameter** is a **number**, **add 5** to it, and **return the
        result**.

-   **subtractTen(num)** - A function that accepts a **single** parameter:

    -   If the **parameter** is **NOT a number**, the function should return
        **undefined**.

    -   If the **parameter** is a **number**, **subtract 10** from it, and
        **return the result**.

-   **sum(num1, num2)** - A function that accepts **two** parameters:

    -   If **any** of the 2 parameters is **NOT a number**, the function should
        return **undefined**.

    -   If **both** parameters are **numbers**, the function should **return
        their sum**.

### JS Code

You are provided with an implementation of the **mathEnforcer** object:

<img src="https://user-images.githubusercontent.com/32310938/63886872-1e531a80-c9e4-11e9-8f2b-3938eaf69a12.png" alt="alt text" width="600" height="">                                                                                                                                                                                                                                                                                                                                                                                                                                    |

The methods should function correctly for **positive**, **negative** and
**floating-point** numbers. In case of **floating-point** numbers the result
should be considered correct if it is **within 0.01** of the correct value.

### Screenshots

When testing a **more complex** object write a **nested describe** for each
function:

<img src="https://user-images.githubusercontent.com/32310938/63886920-3aef5280-c9e4-11e9-8034-f8f0861471cd.png" alt="alt text" width="600" height="">

Your tests will be supplied with a variable named **"mathEnforcer"** which
contains the mentioned above logic. All test cases you write should reference
this variable.

### Hints

-   Test how the program behaves when passing in **negative** values.

-   Test the program with floating-point numbers (use Chai’s **closeTo()**
    method to compare floating-point numbers).

<br/>

### Solution: <a title="04 Math Enforcer" href="https://github.com/TsvetanNikolov123/JS-Core---JS-Advanced/blob/master/08%20Unit%20Testing%20And%20Modules%20Exercise/04%20Math%20Enforcer/mathEnforcer.test.js">04 Math Enforcer</a>

---