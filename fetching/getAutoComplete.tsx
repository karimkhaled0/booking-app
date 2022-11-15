import axios from "axios";


type Params = {
    queryKey: [string, { queryFrom: string }],
};
type Params2 = {
    queryKey: [string, { queryTo: string }];
};
// Auto complete From
export const autoCompleteFrom = async (params: Params) => {
    const [, { queryFrom }] = params.queryKey
    const options = {
        method: 'GET',
        url: 'https://srv.wego.com/places/search',
        params: { language: 'en', query: queryFrom, min_airports: '1' }
    };
    const res = await axios.request(options)
    return res.data

}
// Auto Complete To
export const autoCompleteTo = async (params: Params2) => {
    const [, { queryTo }] = params.queryKey
    const options = {
        method: 'GET',
        url: 'https://srv.wego.com/places/search',
        params: { language: 'en', query: queryTo, min_airports: '1' }
    };
    const res = await axios.request(options)
    return res.data
}