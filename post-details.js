

async function userPost () {
    let user = await fetch('https://jsonplaceholder.typicode.com/comments')
        .then(value => value.json())
    const section = document.createElement('section')
    section.classList.add ('section')
    for (const item of user) {
        const post = document.createElement('div')
        const postId = document.createElement('p')
        postId.innerText = `postId : ${item.postId}`
        const postUserId = document.createElement('p')
        postUserId.innerText = `id : ${item.id}`
        const postName = document.createElement('p')
        postName.innerText = `name : ${item.name}`
        const postEmail = document.createElement('p')
        postEmail.innerText = `email : ${item.email}`
        const postBody = document.createElement('p')
        postBody.innerText = `body : ${item.body}`



        section.append(post)
        post.append(postId, postUserId, name, postEmail, postBody)
        document.body.append(section)
    }

}
userPost()