const promise =  new Promise((resolve,reject) => {
      setTimeout(() => {
          resolve("資料取得成功");
        },2000);
    });

promise.then(data => {console.log(data);});

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("資料取得失敗")
    },2000)
})

promise1
    .then(data => {console.log(data);})
    .catch(error => {console.log(error);})
    .finally(() => {console.log("結束");});

    function getUser(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve({
                    name : "Ryo",
                    age : 30
                })
            },3000)
        })
    }

  getUser()
    .then(user => {console.log(user)});

    function getProducts(){
        return new Promise(resolve=>{
            setTimeout(()=>{
                resolve([
                    "iPhone",
                    "Macbook",
                    "iPad"
                ])
            },3000)
        })
    }

    getProducts()
        .then(products => {console.log(products)});