(function searchComic() {
    const btnSearch = document.querySelector('#search-button');
    const searchIndex = document.querySelector('#search-box');
    const errorMsg = document.querySelector('#error');
    let errorId;

    function showError() {
        errorMsg.classList.remove('hidden');
    }

    function hideError() {
        errorMsg.classList.add('hidden');
    }

    // checking if the input is valid
    function isError(num) {
        if (num > 0 && Number.isInteger(Number(num))) {
            return false;
        }
        return true;
    }

    // generate comics for valid search results
    function displayResult(searchIndex) {
        const indexComic = +searchIndex.value;
        if (isError(indexComic)) {
            clearTimeout(errorId);
            showError();
            errorId = setTimeout(() => hideError(), 2000);
        }
        else {
            hideError();
            doComicNumber('set', indexComic);
            createComics();
        }
    }

    // perform search when user press clicks on search
    btnSearch.addEventListener('click', function () {
        displayResult(searchIndex);
    });

    // perform search when user press 'enter'
    searchIndex.addEventListener('keyup', function (event) {
        event.preventDefault();
        if (event.keyCode === 13) {
            displayResult(searchIndex);
        }
    })
})();