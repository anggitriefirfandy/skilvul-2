let nonton = (kondisi) => {
    return new Promise((resolve, reject) => {
        if (kondisi == "jalan"){
            resolve("nonton terpenuhi")
        } 
        reject("batal nonton")
    })
}


//promise
//namaPromise.then().catch()
nonton("jalan")
.then(result => {
    console.log(result);
}).catch(err => {
    console.log(err);
})

//async await -> cara untuk menangkap obj promise
//buat async await
async function asyncNonton(){
    try {
        let result = await nonton()
    } catch (error) {
        console.log(error);
    }
}
asyncNonton()
//async arrow 
//let asyncNonton = async() => {}



// https://digimon-api.vercel.app/api/digimon



