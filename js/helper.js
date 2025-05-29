const saveToLocalStorage = (key,cart) => {
    localStorage.setItem(key, JSON.stringify(cart));
};

const getFromLocalStorage = (key) => {

    const strData = localStorage.getItem(key);

    return strData ? JSON.parse(strData) : [];
};

export {saveToLocalStorage, getFromLocalStorage};