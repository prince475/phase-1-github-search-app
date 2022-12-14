//Event listeners
// document.querySelector('#github-form').addEventListener('submit', handleSubmit)

// function handleSubmit(e){
//     e.preventDefault()
//     let repositoryName = {
//         name:e.target.search.value,
//         submit:e.target.submit.value
//     }
//     renderGitHubRepository(repositoryName)
// }

// // rendderGitHubRepository function
// function renderGitHubRepository(item){

//     let card = document.createElement('li')
//     card.className = 'card'
//     card.iinerHTML = `
//     <div class="content">
//     <h4>${item.login}</h4>
//     <h4>${item.id}<h4>

//      <url="${item.url}">
    
    
//     `
document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form = document.querySelector('form')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      searchInput(e.target.search.value)




    })

})

const config ={
    header:{
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json"
    }
}



function searchInput(input){
    fetch(`https://api.github.com/search/users?q=${input}`)
    .then(response => response.json())
    .then(data =>{
        // console.log(data)
        let name = data.items
        console.log(name)
        // console.log(name[1].login)
        const lp = ()=>{
            for(let i = 0; i <name.length;i++){
                const user = document.querySelector('#user-list')
                const li1 = document.createElement('li')
                li1.innerHTML=`<li>${name[i].login}</li><p>${name[i].html_url}<p><img src=${name[i].avatar_url}>`
                user.appendChild(li1)

                li1.addEventListener("click",()=>{
                    fetch(`https://api.github.com/users/${name[i].login}/repos`)
                    .then(response=>response.json())
                    .then(repos=>{
                        console.log(repos)
                        for(let i = 0; i <repos.length;i++){
                            const reposi =document.querySelector("#repos-list")
                            const repoli =document.createElement('li')
                            repoli.innerHTML = `${repos[i].name}`
                            reposi.appendChild(repoli)

                        }

                    })
                })

            }





            // const ul = document.createElement('ul')
            // console.log(name)






        }
        lp()

            // ul.appendChild(li)}}

        // name.forEach(lp)

        // user.appendChild(li)

        // data.forEach((name)=>{
        //     for(let item of name){
        //         const user = document.querySelector('#user-list')
        //         const li = document.createElement('li')
        //         console.log(item)
        //         li.innerHTML=`${item}`
        //         user.appendChild(li)
        //     }

        // })


    })

}


// function items(content){
//     for(let item of content){
//         return item
//     }
// }
