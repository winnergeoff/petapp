const getLocalStorage = (key) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : '';
};
export default getLocalStorage;