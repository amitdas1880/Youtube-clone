
const apiKey = "AIzaSyC0lDc68z2wZ19AT7_ST7RQ2833ZIm1IyE" ;
const baseUrl = `https://www.googleapis.com/youtube/v3`;

/**
 * 
 * searchString is the value typed by the user in the input box.
 * @param {String} searchString 
 */
// SEARCH

const searchButton = document.getElementById("search");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click",()=>{
    let searchString = searchInput.value ;
    if(searchString===""){
        return ;
    }
    else{
        getSearchResults(searchString);
    }
});

async function getSearchResults(searchString){

    let url = `${baseUrl}/search?key=${apiKey}&q=${searchString}&part=snippet&maxResult=20`;
    const response = await fetch(url,{method:"GET"});
    const result = await response.json();
    console.log(result);

    addDataOntoUI(result.item)
}

/*
    <div class="vedio">
        <img src="./All-img/sub-img/Images.png">
        <p>Abcde Fghi Jklm mop qurst uv wxyz</p>
        <p>James Gouse</p>  
    </div>
*/
const container = document.getElementById("two-point-two");

async function getSearchResults(searchString) {
    // make a call to the search API and return the results from here.
    // data need to be sent: apiKey , searchString
    let url = `${baseUrl}/search?key=${apiKey}&q=${searchString}&part=snippet&maxResults=100`
    const response = await fetch(url, { method: "GET" });
    const result = await response.json();
    console.log(result)
    addDataOntoUI(result.items);
}

function addDataOntoUI(videosList) {
   videosList.forEach((video) => {
        const {snippet} = video ;
        // const snippet = video.snippet

        const videoElement = document.createElement("div");
        videoElement.className = "video";
        videoElement.innerHTML = `
                    <img src="${snippet.thumbnails.high.url}" >
                    <p>${snippet.title}</p>
                    <b>${snippet.channelTitle}</b>
        `;
        container.appendChild(videoElement)
   })
}