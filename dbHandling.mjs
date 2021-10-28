const src = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=m";

const getData = async () => {
    const data = await fetch(src);
    return await data.json();
}

const manageDrinks = async (method, id) => {

        source = src;
        options = {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(charObj)
        }
    
    let response = await fetch(source, options);
    let data = await response;
    console.log(data);
    window.location.reload();
}

export { getData, manageDrinks };

