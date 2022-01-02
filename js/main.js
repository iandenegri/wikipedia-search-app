import {setTheSearchFocus} from "./searchbar.js"
import {getTheSearchTerm, retrieveTheSeachResults} from "./dataFuncs.js"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    setTheSearchFocus();

    // TODO: 3 listeners for DOM for typing

    // 1 listener on form

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

const submitTheSearch = (event) => {
    event.preventDefault();
    // TODO: delete any prior search results

    processTheSearch();

    setTheSearchFocus();
}

const processTheSearch = async () => {
    // TODO: clear stats from last search

    const searchTerm = getTheSearchTerm();

    // Check if search query is blank do nothing
    if (searchTerm === "") {
        return
    }
    // send request to wikipedia api and get results
    const resultsArray = await retrieveTheSeachResults(searchTerm);

    // If results, build them for our UI
    if (resultsArray.length) {

    }

    // TODO: Set stats to show
};