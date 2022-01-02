export const setTheSearchFocus = () => {
    document.getElementById("search").focus();
};


export const showClearTextButton = () => {
    const search = document.getElementById("search");
    const clear = document.getElementById("clear");
    if (search.value.length > 0){
        clear.classList.remove("none");
        clear.classList.add("flex");
    } else {
        clear.classList.remove("flex");
        clear.classList.add("none");
    }
}

export const clearSearchText = (event) => {
    event.preventDefault();
    document.getElementById("search").value = "";
    const clear = document.getElementById("clear");
    clear.classList.remove("flex");
    clear.classList.add("none");
    setTheSearchFocus();
}

export const clearPushListener = (event) => {
    if (event.key === "Enter" || event.key === " "){
        event.preventDefault();
        document.getElementById("clear").click();
    }
}