const showNumComics = document.querySelector('#list')

// create new set of comics whenever value changes in select/option menu
showNumComics.addEventListener('change', function () {
    createComics();
});