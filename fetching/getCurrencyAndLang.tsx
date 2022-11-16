import axios from "axios";

type Params = {
};

export const getCurrencyAndLang = async (params: Params) => {
    const options = { method: 'GET', url: 'https://srv.wego.com/places/v1/currencies/latest' };

    const res = await axios.request(options)
    return res.data
}
