import * as Ajax from './utils/ajax';

const url = 'https://jsonplaceholder.typicode.com/photos?albumId=1';
Ajax.load(url).then(
    console.log
);
