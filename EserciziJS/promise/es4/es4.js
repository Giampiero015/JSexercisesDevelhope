function fetchDataFromAPI() {
    let success = Math.random() * 0.5;
    return new Promise((resolve,reject)=> {
        if (success < 0.5) {
            reject("Error: Failed to fetch data.");
        }else {
            resolve(" Data retrieved successfully.");
        }
    })
}

fetchDataFromAPI().then((ok)=>{console.log(ok)})
                    .catch((err)=>{console.log(err)});
