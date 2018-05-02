'use strict';

console.log('Loading function');

exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));
    //console.log('value1 =', event.key1);
    //console.log('value2 =', event.key2);
    //console.log('value3 =', event.key3);
    //callback(null, event.key1);  // Echo back the first key value
    //callback('Something went wrong');
    
    let min = 0;
    let max = 10;
    
    let generatedNumber = Math.floor(Math.random() * max) + min;
    
    callback(null, generatedNumber);
    
};

