// -  Create an array variable named `animals`
//    with the following content: `["koal", "pand", "zebr"]`
// -  Add all elements an `"a"` at the end

let animals : string[] = ["koal", "pand", "zebr"];

animals = animals.map(animal => {
    return animal + 'a';
})
console.log(animals);