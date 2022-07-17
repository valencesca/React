export const customFetch = (data,time) => {    
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(true){
                setTimeout(() => {
                    resolve(data);
                }, time);
            }
            else{
                reject("Error")
            }
        },2000);
        
    });
}

