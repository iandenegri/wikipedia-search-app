import {setTheSearchFocus} from "./searchbar.js"
import {getTheSearchTerm} from "./dataFuncs.js"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    setTheSearchFocus();

    // 3 listeners for DOM for typing

    // 1 listener on form

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

const submitTheSearch = (event) => {
    event.preventDefault();
    // delete any prior search results

    processTheSearch();

    setTheSearchFocus();
}

const processTheSearch = async () => {
    // clear stats from last search

    const searchTerm = getTheSearchTerm();

    // send request to wikipedia api

    // get results
};