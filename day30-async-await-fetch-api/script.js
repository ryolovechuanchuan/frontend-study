fetch("https://jsonplaceholder.typicode.com/users")

.then(response=>{return response.json()})
.then(data=>{console.log(data)});

async function getdata(){
    try{
    const respone = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respone.json();
    console.log(data);
    }catch(error){
        console.log("失敗");
    }
}
getdata();


const input = document.getElementById("username");
const btn = document.getElementById("btn");
const showdata = document.getElementById("showdata");
btn.addEventListener("click",
    async function  Search() {
        const username = input.value.trim();
        try{
            const respone = await fetch(`https://api.github.com/users/${username}`);
            const data = await respone.json();
            showdata.innerHTML=
            `
            <h2>${data.login}</h2>
            <img src="${data.avatar_url}" width="150">
            <p>Followers：${data.followers}</p>
            <p>Following：${data.following}</p>
            <p>Public_repos：${data.public_repos}</p>
            `;
        }catch(error){
        console.log("失敗");
    }
    }
)