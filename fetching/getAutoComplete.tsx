type Params = {
    queryKey: [string, { query: string }];
};
export const autoComplete = async (params: Params) => {
    const [, { query }] = params.queryKey
    const res = await fetch(`https://srv.wego.com/places/search?language=en&query=${query}&min_airports=1`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch(err => console.error(err))
    return res
}