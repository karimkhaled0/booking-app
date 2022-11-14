type Params = {
};

export const getCurrencyAndLang = async (params: Params) => {
    const res = await fetch(`https://srv.wego.com/places/v1/currencies/latest`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch(err => console.error(err))
    return res
}
