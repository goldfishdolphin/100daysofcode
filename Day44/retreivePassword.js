
function retrievePassword(user) {

    return user.password;
}

console.log(retrievePassword({
    name:"Sam",
    password:"hi!"
}))