# Mentoring ES2015

This repository contains a list of excercises that encourages the development of ES2015's skills.

Feel free to interact with the repository by cloning the solution, solving the excercises or uploading changes in this structure to improve this dynamic.

## Excercises

1. [Communicating with a Web Service](excercise-1.md)

## Troubleshooting for cloning repository
-	Install [git credentials manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/download/v1.14.0/GCMW-1.14.0.exe)
-	If this is the first time you interact with the repository 
    -   Clone this repository using your Accenture credentials
-   If you cloned befored this repository 
    -	Locate where you cloned this repository, and run:
        -	```git remote remove origin```
        -	```git remote add origin``` https://innersource.accenture.com/projects/MDCFED/repos/xd-angular-basics/ 
        -	```git.config user.email = tu.correo.de.accenture@accenture.com```
        -	```git.config user.name = 'Your displayed name in your Accenture contact card'```
        -	```git fetch```


## How to start the solution?
- Install the dependencies: ```npm install```
- Run the solution: ```gulp serve```

## How to test the solution?
- Write your tests in the ```test``` folder, basing your implementation on [Jasmine](http://jasmine.github.io/2.1/introduction.html) framework.
- Run the command: ```gulp test:unit```


## Contacts
- [Manuel de Jesús Escobedo Escareño](mailto:m.escobedo.escareno@accenture.com?subject=Mentories - Issues with mentoring repository&body=FYI)