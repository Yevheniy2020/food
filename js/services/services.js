// //function in real flow (потоке)
const postData = async (url, data) => {

    //fethc = async code, we dont know when return res
    const res = await fetch(url, {
        //stop res while res = fetch
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        }, //for json
        body: data
    });

    return await res.json();
};

const getResourses = async (url) => {

    //GET 
    const res = await fetch(url, {});

    //  if error (catch can`t work, if errors 404 ,405..)
    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status ${res.status}`); //send error
    }

    return await res.json();
};


export {
    postData
};

export {
    getResourses
};