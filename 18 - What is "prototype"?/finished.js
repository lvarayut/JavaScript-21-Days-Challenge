(() => {
  // 1. Class vs Prototype 
  class Person {}
  console.log(new Person());

  // 2. What's prototype?
  const name = 'Varayut';
  console.log(name.__proto__);

  const arr = [];
  console.log(arr.__proto__);

  // 3. Prototype chain
  const name = 'Varayut';
  console.log(name.toString());
  console.log(name.__proto__);
  console.log(name.__proto__.__proto__);

  // 4. Extend a prototype
  const name = 'Varayut';
  function sayHello(val) {
    console.log(`Hello ${val}`);
  }
  String.prototype.sayHello = sayHello;
  name.sayHello('World');
})();
