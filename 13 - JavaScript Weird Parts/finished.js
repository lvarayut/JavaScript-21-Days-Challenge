(() => {
  // 1. NaN
  if (NaN !== NaN) {
    console.log('NaN is super strange!!');
  }

  if (Number.isNaN(NaN)) {
    console.log('NaN is working correctly');
  }

  // 2. Type Coercion
  if (3 > 2 > 1) {
    console.log('Type coercion makes it become falsy');
  }

  console.log(1 + '2');
  console.log(true + true);

  // 3. Interpreter & Compiler
  function getPerson() {
    return
    {
      name: 'Varayut'
    }
  }
  console.log('My name is ', getPerson());

  function getPerson() {
    return {
      name: 'Varayut'
    };
  }
  console.log('My name is ', getPerson());

  // 4. Checking Object Type
  const person = null;
  if (typeof person === 'object') {
    console.log('Checking object type is wrong');
  }

  if (typeof person === 'object' && person !== null) {
    console.log('Checking object type is now working correctly');
  }
})();
