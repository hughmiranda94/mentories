# Mentoring ES2015

This repository contains a list of excercises that encourages the development of ES2015's skills.

Feel free to interact with the repository by cloning the solution, solving the excercises or uploading changes in this structure to improve this dynamic.

## Dynamics

- Clone the repo using this command: ```git clone -b develop https://your.accenture.email@innersource.accenture.com/scm/mdcfed/xd-mentories.git``` 
- Create a branch from develop with the name ```excercise-<number>```
- Implement test for the new excercise under ```test/excercise-<number>.spec.js``` and complete 100% coverage


## Topics

1. Export and Import / Modules on ES6
2. Destructuring I, Bias

## Troubleshooting for cloning repository
-	Install [git credentials manager](https://github.com/Microsoft/Git-Credential-Manager-for-Windows/releases/download/v1.14.0/GCMW-1.14.0.exe)
-	If this is the first time you interact with the repository 
    -   Clone this repository using your Accenture credentials
-   If you cloned befored this repository 
    -	Locate where you cloned this repository, and run:
        -	```git remote remove origin```
        -	```git remote add origin https://your.accenture.email@innersource.accenture.com/scm/MDCFED/xd-mentories.git ```
        -	```git.config user.email = your.accenture.email@accenture.com```
        -	```git.config user.name = 'Your displayed name in your Accenture contact card'```
        -	```git fetch```

## How to start the solution?
- Install the dependencies: ```npm install```
- Run the solution: ```gulp serve```

## Dynamics
- Create a branch named ```your.enterprise.id``` from develop
- Upload your solved excercises in the ```your.enterprise.id```'s branch
- For future excercises, integrate the develop latest changes in the ```your.enterprise.id```'s branch

## How to test the solution?
- Write your tests in the ```test``` folder, basing your implementation on [Jasmine](http://jasmine.github.io/2.1/introduction.html) framework.
- Run the command: ```gulp test:unit```

## Contacts
- Manuel de Jesús Escobedo Escareño ```m.escobedo.escareno@accenture.com```
