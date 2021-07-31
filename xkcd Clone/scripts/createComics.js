function createComics() {
    // store current index as the middle of comic list to be shown
    const middleComicIndex = doComicNumber();
    const numComics = +showNumComics.value;
    // offset required to re-adjust middleComicIndex as the middle comic
    const offset = Math.floor(numComics / 2);
    const min = 1;
    const max = 2475;
    // count number of api fetched
    let counter = 0;

    // fetch data based on the comic index
    const retrieveApiData = async (index) => {
        const response = await fetch('https://intro-to-js-playground.vercel.app/api/xkcd-comics/' + index)
        const data = await response.json()
        counter += 1;
        return data
    }

    function showLoading() {
        // reset and empty the comic list
        document.getElementById('comic-list').innerHTML = "";
        // show loading indicator and hide comic list
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('comic-list').classList.add('hidden');
    }

    function hideLoading() {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('comic-list').classList.remove('hidden');
    }

    // start loading
    showLoading();
    // for loop to create the number of comics to show
    for (let i = 0; i < numComics; i++) {
        // comic index order to take into account the number of comics to show e.g.
        // show 1 comic: [7]
        // show 5 comics: [5, 6, 7, 8, 9]
        currentComicIndex = middleComicIndex - offset + i
        // check if > 2475
        currentComicIndex = currentComicIndex > max ? currentComicIndex - max : currentComicIndex;
        // check if < 1
        currentComicIndex = currentComicIndex < min ? currentComicIndex + max : currentComicIndex;

        retrieveApiData(currentComicIndex).then((data) => {
            // wrapper for a comic title and image
            singleComic = document.createElement("div");
            singleComic.className = "singleComic";
            // adding order because of different fetch response time
            singleComic.style.order = i.toString();

            // comic title
            const title = document.createElement("div");
            const textNode = document.createTextNode(`${data.title}`);
            title.appendChild(textNode);
            title.className = "comic-title";
            singleComic.appendChild(title);

            // comic image
            const image = document.createElement('img');
            image.src = `${data.img}`;
            image.className = "comic-image";
            singleComic.appendChild(image);

            // add created comic to list of comics
            document.getElementById("comic-list").appendChild(singleComic);
            
            // show comics once all the data has been fetched
            if (counter===numComics) {
                hideLoading();
            }
        });
    }
};