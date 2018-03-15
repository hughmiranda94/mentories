# Comunicándose con un servicio Web

In this excercise you will implement a method that allows the communication with a web service that pulls information in JSON format using the GET verb. This method should returns a fulfilled promise when the service pulls information after a successfull response or a rejected promised in otherwise.

This implementation will be stored under ```src/utils/ajax.js```, and anywhere you include this library you should use ```Ajax``` as an alias.

This excercise is considered solved when you implement at least three unit tests under ```test/excercise-1.spec.js```, covering all the following scenarios:

- ```Ajax.load``` method should exists
- ```Ajax.load``` method returns a fulfilled promise when a service is successfully pulled
- ```Ajax.load``` method returns a rejected promise when you interact with an invalid service

## ES2015 topics seeing in this excercise

- [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [ES2015 modules](http://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules)

## Other topics seeing in this excercise

- [XMLHttpRequest, Raw Ajax call](https://developer.mozilla.org/en/docs/Learn/JavaScript/Objects/JSON)
