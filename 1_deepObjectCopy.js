const user = {
    userName: 'Tanya',
    eMail: 'tanya@tanya.ru',
    adress: {
        city: 'Murino',
        street: 'Mendeleeva'
    }
}

const copyObject = JSON.parse(JSON.stringify(user)) //Преобразовали в строку, и обратно в объект, теперь новый объект не привязан к исходному 

copyObject.adress.street = "Shuvalova" 

const newObject = Object.assign({}, user)

newObject.adress.street = "Shuvalova" //Меняет у исходного объекта, т.к. ссылаются на одну ячейку памяти

console.log(user.adress)