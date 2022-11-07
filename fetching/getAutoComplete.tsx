type Params = {
    queryKey: [string, { queryFrom: string }],
};
type Params2 = {
    queryKey: [string, { queryTo: string }];
};
// Auto complete From
export const autoCompleteFrom = async (params: Params) => {
    const [, { queryFrom }] = params.queryKey
    const res = await fetch(`https://srv.wego.com/places/search?language=en&query=${queryFrom}&min_airports=1`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch(err => console.error(err))
    return res
}
// Auto Complete To
export const autoCompleteTo = async (params: Params2) => {
    const [, { queryTo }] = params.queryKey
    const res = await fetch(`https://srv.wego.com/places/search?language=en&query=${queryTo}&min_airports=1`, {
        method: 'GET',
    })
        .then(response => response.json())
        .catch(err => console.error(err))
    return res
}