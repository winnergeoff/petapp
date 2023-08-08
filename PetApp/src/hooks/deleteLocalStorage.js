const deleteLocalStorage = (key) => {
    window.localStorage.removeItem(key);
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : '';
};
export default deleteLocalStorage;