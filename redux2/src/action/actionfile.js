const base_url = "http://localhost:2300"

export function latestNews(){
    const output = fetch(`${base_url}/articles?_end=3`,{method:'GET'})
    .then((data) => data.json());

    return{
        type:'LATEST_NEWS',
        payload:output
    }
}

export function articleNews(){
    const output = fetch(`${base_url}/articles?_start=3&_end=10`,{method:'GET'})
    .then((data) => data.json());

    return{
        type:'ARTICLE_NEWS',
        payload:output
    }
}

export function galleryNews(){
    const output = fetch(`${base_url}/galleries?_limit=2`,{method:'GET'})
    .then((data) => data.json());

    return{
        type:'GALLERY_NEWS',
        payload:output
    }
}

export function selectedNews(id){
    const output = fetch(`${base_url}/articles?id=${id}`,{method:'GET'})
    .then((data) => data.json());

    return{
        type:'SELECTED_NEWS',
        payload:output
    }
}