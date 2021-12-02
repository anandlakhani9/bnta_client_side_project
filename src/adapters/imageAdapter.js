import axios from "axios";

const getImage = (recipeName) => {
    return(
        //axios.get("https://serpapi.com/search.json?q=Apple&tbm=isch&ijn=0&api_key=287eb9b8ef2165b0eb3ae4de355420efd1739e530d92598bc6314145f7224f6f" )
        axios.get(`http://api.scraperapi.com/?api_key=0d2ec0dd79ad60b5531d06dd5771be3e&url=https://www.google.com/search?as_st=y&tbm=isch&hl=en-US&as_q=apple&as_epq=&as_oq=&as_eq=&imgsz=&imgar=&imgc=&imgcolor=&imgtype=&cr=&as_sitesearch=&safe=active&as_filetype=&tbs=&render=true`)
        // 
    ).catch((e)=>  {
        console.log("imageAdapter could not load image")
    })
}
export {getImage}