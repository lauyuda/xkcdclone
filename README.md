# xkcdclone
This is the GitHub repository for a xkcd inspired clone using HTML, CSS, and JS.

## Guide to components of the code
<img src="https://github.com/lauyuda/xkcdclone/blob/main/xkcd%20Clone/images/guide.PNG?raw=truee" width=70% height=70%>

## What JS scripts are used? 
Number  | Script        | Functionality
------- | ------------- | -------------
1       | searchComic   | Performs search on comic index provided by user and returns the comic(s). Displays error message if search is invalid.
2       | showNumComics | Specifies the number of comics to be shown (1, 3, or 5).
3       | nav           | Navigation buttons to perform actions (next, previous, random) on current comic index.
4       | createComic   | Fetch the comic data and displays loading while doing it. And generates comic list based on current comic index and number of comics to be shown.
5       | doComicNumber | Performs an action on the current comic index. Actions include next, previous, random, set user input, and returning current index.


## How are the comics displayed? 
There is a single-comic div to contain both the comic-title and comic-image.\
To show n number of comics, it will generate n number of single-comic div.

## Where can I find the code?
All the scripts in index.html are written in JS and can be found in the scripts folder.\
The stylesheet CSS used for index.html is within the styles folder.\
Images used in this project are in the image folder.

## How to run it using VSCode?
Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension to run index.html.
