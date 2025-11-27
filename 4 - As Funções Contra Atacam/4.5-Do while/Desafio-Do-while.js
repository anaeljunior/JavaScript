let p = document.querySelector('p')
let input = document.querySelector('input')

const contacts = [
    { name: 'Anael', phone: '(84) 99999-9999' },
    { name: 'Gorete', phone: '(84) 88888-8888' },
    { name: 'Júlia', phone: '(84) 77777-7777' },
    { name: 'Soraya', phone: '(84) 66666-6666' },
    { name: 'Júnior', phone: '(84) 55555-5555' },
    { name: 'Gael', phone: '(84) 44444-4444' },
    { name: 'Vitória', phone: '(84) 33333-3333' },
]

function search() {
    let i = 0
    let found = false

    do {
        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
            p.innerHTML = `Contato encontrado:
            <br>
            <br>Nome: ${contacts[i].name}
            <br>Telefone: ${contacts[i].phone}`

            found = true

            break
        }
        i++;

    } while (i < contacts.length)

    if (!found) {
        p.innerHTML = 'Contato não encontrado'
    }
}




// function search() {
//     let i = 0
//     let found = false

//     while (i < contacts.length) {

//         if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {
//             p.innerHTML = `Contato encontrado: 
//             <br>
//             <br>Nome: ${contacts[i].name}
//             <br>Telefone: ${contacts[i].phone}`

//             found = true;

//             break

//         }
//         i++;
//     }

//     if (!found) {
//         p.innerHTML = 'Contato não encontrado';
//     }
// }



// function search() {
//     let i = 0;

//     while (i < contacts.length) {
//         i++;

//         if (input.value.toLowerCase() === contacts[i - 1].name.toLowerCase()) {
//             p.innerHTML = `Contato encontrado:
//             <br>
//             <br>Nome: ${contacts[i - 1].name}
//             <br>Telefone: ${contacts[i - 1].phone}`

//             break

//         } else {
//             p.innerHTML = 'Contato não encontrado'
//         }
//     }
// }
