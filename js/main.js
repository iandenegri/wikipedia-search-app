import {setTheSearchFocus, showClearTextButton, clearPushListener, clearSearchText} from "./searchBar.js"
import {getTheSearchTerm, retrieveTheSeachResults} from "./dataFuncs.js"
import {deleteSearchResults, buildSearchResults, clearStatsLine, setStatsLine} from "./searchResults.js"

document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        initApp();
    }
});

const initApp = () => {
    setTheSearchFocus();

    const search = document.getElementById("search");
    search.addEventListener("input", showClearTextButton);
    const clear = document.getElementById("clear");
    clear.addEventListener("click", clearSearchText);
    clear.addEventListener("keydown", clearPushListener);

    const form = document.getElementById("searchBar");
    form.addEventListener("submit", submitTheSearch);
}

const submitTheSearch = (event) => {
    event.preventDefault();
    deleteSearchResults();
    processTheSearch();
    setTheSearchFocus();
}

const processTheSearch = async () => {
    // clear stats from last search
    clearStatsLine();

    const searchTerm = getTheSearchTerm();
    if (searchTerm === "") {
        return 1
    }
    const resultsArray = await retrieveTheSeachResults(searchTerm);
    // If results, build them for our UI
    console.log("wehhhh")
    if (resultsArray.length) {
        buildSearchResults(resultsArray);
    }

    // Set stats to show
    setStatsLine(resultsArray.length);
};