export const getGifs = async(categoria)  =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TeyjgtDZF5w2lPwaxvBsWWThKFX60tpr&q=${categoria}&limit=10`;
    const resp = await fetch( url );
    const { data } = await resp.json()

    const gifs = data.map(ele =>({
        id:ele.id,
        title:ele.title,
        url:ele.images.downsized_medium.url
    }))

    //console.log(gifs);
    return gifs;
}