(function test() {
    const btnPrev = document.querySelectorAll('.prev');
    const btnRand = document.querySelectorAll('.rand');
    const btnNext = document.querySelectorAll('.next');

    btnPrev.forEach(button => button.addEventListener('click', function () {
        // retrieves number of comics to show
        const numComics = +showNumComics.value;
        // perform button intended action on current comic index
        doComicNumber('prev', numComics);
        // re-generate comics
        createComics();
    }));

    btnRand.forEach(button => button.addEventListener('click', function () {
        doComicNumber('rand');
        createComics();
    }));

    btnNext.forEach(button => button.addEventListener('click', function () {
        const numComics = +showNumComics.value;
        doComicNumber('next', numComics);
        createComics();
    }))
})();