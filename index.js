

async function  user (){
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
    const userBlock= document.createElement('section')
    userBlock.classList.add ('users')
    for (const user of users) {
        const blockUsers = document.createElement('div')
                const userId = document.createElement('p')
                userId.innerText = `id = ${user.id}`
                const userName = document.createElement('p')
                userName.innerText = `${user.name}`
                const userButton = document.createElement('button')
                userButton.innerText = `data`
                const userLink = document.createElement('a')
                userLink.href = `user-details.html?id=${user.id}`
                userBlock.appendChild(blockUsers)
                userLink.appendChild(userButton)
                blockUsers.append(userId, userName, userLink)
                document.body.appendChild(userBlock)
    }
}
user()

