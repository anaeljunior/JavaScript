const users = { name: 'Anael', age: 40, street: 'Rua dos Desenvolvedores' }

// users.name -> Anael 
// user['name'] -> Anael

for (const key in users) {
    //console.log(key + ' : ' + users[key]) ou
    console.log(`${key}: ${users[key]}`)
}