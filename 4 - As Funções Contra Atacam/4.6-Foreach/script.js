const users = [
    { name: "Alice", age: 25, phone: "123-456-7890" },
    { name: "Bob", age: 32, phone: "987-654-3210" },
    { name: "Charlie", age: 18, phone: "555-555-5555"},
    { name: "Diana", age: 42, phone: "444-444-4444" }
]

users.forEach((element, index) => {
    console.log(`${index + 1}) Nome: ${element.name}, Idade: ${element.age}, Telefone: ${element.phone}`)
});