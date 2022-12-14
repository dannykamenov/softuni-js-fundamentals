function solve(arr) {
    let newArr = {};
    arr.forEach(element => {
        let parsed = JSON.parse(element);
        let key = Object.keys(parsed)[0];
        let value = Object.values(parsed)[0];
        newArr[key] = value;
    });
    Object.entries(newArr).sort((a,b) => a[0].localeCompare(b[0])).forEach(x => console.log(`Term: ${x[0]} => Definition: ${x[1]}`));
}

solve([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',

  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',

  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',

  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',

  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
