const setLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
    console.log(key);
    console.log(value);
    const item = window.localStorage.getItem(key);
    return item ? item : '';
}
export default setLocalStorage;