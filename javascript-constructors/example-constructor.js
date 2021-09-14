function ExampleConstructor() {

}

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor:', typeof ExampleConstructor);

var example = new ExampleConstructor();
console.log('example', example);

var isInstanceOf = example instanceof ExampleConstructor;
console.log('isInstanceOf', isInstanceOf)
;
