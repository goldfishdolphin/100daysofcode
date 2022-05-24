function makeGuestList(person) {
    // Your code goes here...
    person={name:'naureen imran'}
    for (let key in person){
     let newName=  person[key].split(' ')
    };
    person={firstName:newName[0],
    lastName:newName[1]}
    delete person.name;

    return console.log(object[key])
}
//console.log(makeGuestList('naureen imran'))