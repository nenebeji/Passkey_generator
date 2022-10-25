# Passkey Generator
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Table of Contents

- [Project Description](#project-description)

  - [Problems Solved](#problems-solved)

- [Screenshots](#screenshots)

- [Usage](#usage)

- [How to Contribute](#how-to-contribute)

- [Tests](#tests)

- [Questions](#questions)

- [License](#license)


## Project Description

This is an application which enables the user to generate random passwords based on the criteria selected.

* When a user clicks on the generate password button, then they are presented with a series of prompts for the password criteria.

* The password length has to be between 8 to 128 characters long.

* When all prompts are answered, then the a password that matches all selected criteria is generated.

### Problems Solved

* I started with creating global variables for each password characters.

* Also created variables with empty strings for possible password character and the selected criteria.

* I noticed the generatepassword() function was undefined, so: 

* * I added the .prompt, .alert and .confirm windows in the function, so that when you click on the generatepassword(), the prompts would appear.
* * Declared the value for the Selector variables if true.

* * I added a for loop to enable the password to generate and loop, according to the criteria selected.

* Finally I returned the password.


## Screenshots

![Webpage Image](/assets/images/passkey.png)
> Fun with passwords! 😁 🔐


## Usage

Click the link below to open the web page.

URL for application:

https://nenebeji.github.io/Passkey_generator/


## How to Contribute

1. Clone the repo using $ git clone git@github.com:nenebeji/Passkey_generator

2. Create a new branch $ git checkout -b your name 

3. Make Changes and test 

4. Submit a pull request with description for review


## Tests

Tests were run using console and browser page.


## Questions

Feel free to contact me for further questions via:

Github: https://github.com/nenebeji

Email: nenebeji@gmail.com


## License

The MIT License

  
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
    
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
    
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

For more informaation you can click the link below:

https://opensource.org/licenses/MIT

Copyright (c) 2022 Oritsegidenene Beji.