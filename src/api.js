const host = 'https://demo1124891.mockable.io';

export const getAllTransactions = () => {
    return fetch(`${host}/transactions`);
}

export const getAllCategories = () => {
    return fetch(`${host}/categories`);
}

export const getAllAccounts = () => {
    return fetch(`${host}/accounts`);
}