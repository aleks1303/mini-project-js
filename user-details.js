

async function userDetails () {
    let user = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    const userSection = document.createElement('section')
    userSection.classList.add('section-user')
    for (const item of user) {
        const userData = document.createElement('div')
        const userBlock = document.createElement('div')
        const userId = document.createElement('p')
        userId.innerText = `id = ${item.id}`
        const userName = document.createElement('p')
        userName.innerText = `name : ${item.name}`
        const userSurName = document.createElement('p')
        userSurName.innerText = `username : ${item.username}`
        const userEmail = document.createElement('p')
        userEmail.innerText = `email : ${item.email}`
        const userAddress = document.createElement('div')
        userAddress.innerText = `address :`
        const street = document.createElement('p')
        street.innerText = `street : ${item.address.street}`
        const suite = document.createElement('p')
        suite.innerText = `suite : ${item.address.suite}`
        const city = document.createElement ('p')
        city.innerText = `city : ${item.address.city}`
        const zipcode = document.createElement('p')
        zipcode.innerText = `zipcode : ${item.address.zipcode}`
        const geo = document.createElement('div')
        geo.innerText = `geo :`
        const lat = document.createElement('p')
        lat.innerText = `lat : ${item.address.geo.lat}`
        const lng = document.createElement('p')
        lng.innerText = `lng : ${item.address.geo.lng}`


        const userBlockData = document.createElement('div')
        const phone = document.createElement('p')
        phone.innerText = `phone : ${item.phone}`
        const website = document.createElement('p')
        website.innerText = `website : ${ item.website}`
        const company = document.createElement('div')
        const name = document.createElement('p')
        name.innerText = `name : ${item.company.name}`
        const catchPhrase = document.createElement('p')
        catchPhrase.innerText = `catchPhrase : ${item.company.catchPhrase}`
        const bs = document.createElement('p')
        bs.innerText = `bs : ${item.company.bs}`

        const button = document.createElement('button')
        button.innerText = `post of current user`
        // button.onclick = function (){
        //     fetch('https://jsonplaceholder.typicode.com/users/USER_ID/posts')
        //         .then(value => value.json())
        //         .then(value => {
        //             for (const title of value) {
        //                const title = document.createElement('h3')
        //                 if (userId.value === 1){
        //                     title.innerText = `title : ${title}`
        //                 }
        //
        //
        //                 console.log(title, button)
        //                 button.append(title)
        //             }
        //
        //         })
        // }
        button.onclick = function () {
            localStorage.setItem(`user`, JSON.stringify(user));
            location.href = `post-details.html`
        }


        document.body.append(userSection)
        userSection.append(userData)
        userData.append(userBlock, userBlockData, button)
        userBlock.append(userId, userName, userSurName, userEmail, userAddress)
        userAddress.append(street, suite, city, zipcode, geo)
        geo.append(lat, lng)
        userBlockData.append(phone, website, company)
        company.append(name, catchPhrase, bs)
    }
}
userDetails()



// user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//    блоки з короткою іфною про post - в ряд по 5 .