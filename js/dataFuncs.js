export const getTheSearchTerm = () => {
    const rawQuery = document.getElementById("search").value.trim();
    const regexCleaner = /[ ]{2,}/gi;
    const cleanedQuery = rawQuery.replaceAll(regexCleaner, " ");
    return cleanedQuery;
};

export const retrieveTheSeachResults = async (searchTerm) => {
    const wikiSearchString = getWikiSearchString(searchTerm);
    const wikiSearchResults = await requestData(wikiSearchString);
    let resultArray = [];
    if (wikiSearchResults.hasOwnProperty("query")) {
        resultArray = processWikiResults(wikiSearchResults.query.pages);
    }
    return resultArray;
}

const getWikiSearchString = (searchTerm) => {
    const maxChars = getMaxChars();
    const rawSearchURL = `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${searchTerm}&gsrlimit=20&prop=pageimages|extracts&exchars=${maxChars}&exintro&explaintext&exlimit=max&format=json&origin=*`;
    const searchURL = encodeURI(rawSearchURL);
    return searchURL
}

const getMaxChars = () => {
    const screenWidth = window.innerWidth || document.body.clientWidth;
    let maxChars;
    if (screenWidth < 414) {
        maxChars = 65;
    }
    if (screenWidth >= 414 && width < 1400) {
        maxChars = 100;
    }
    if (screenWidth >= 1400) {
        maxChars = 130;
    }
    return maxChars;
}

const requestData = async (searchString) => {
    try {
        const resp = await fetch(searchString);
        const data = await resp.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const processWikiResults = (results) => {
    return 1;
}