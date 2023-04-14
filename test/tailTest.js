const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
assertEqual(tail(["Hello", "Lighthouse"]), "Lighthouse")