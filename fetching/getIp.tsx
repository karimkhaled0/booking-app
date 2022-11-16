import axios from "axios";

type Params = {
};

export const getIp = async (params: Params) => {
    const options = { method: 'GET', url: 'https://ipapi.co/json/' };

    const res = await axios.request(options)
    return res.data
}
