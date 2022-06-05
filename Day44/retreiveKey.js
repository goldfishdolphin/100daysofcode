function retrieveKey(object, key) {

    return object[key]
}
console.log(retrieveKey({password: 'Chips!'}, 'password'))