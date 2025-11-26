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
    for (let i = 0; i < contacts.length; i++) {

        if (contacts[i].name.toLowerCase() === input.value.toLowerCase()) {
            p.innerHTML = `Contato encontrado: 
            <br>
            <br>Nome: ${contacts[i].name}
            <br>Telefone: ${contacts[i].phone}`

            break

        } else {
            p.innerHTML = 'Contato não encontrado'
        }
    }
}
