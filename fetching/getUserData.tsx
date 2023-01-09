import axios from "axios";

type Params = {
};

export const getUserData = async (params: Params) => {
    const options = {
        method: 'GET',
        url: 'https://vercel.com/kkmawe/booking-back/HDQGpdvGdiKq5qbmW5TmBF7ivTRv/api/user/me',
        headers: {
            authorization: `Bearer ${localStorage.token}`
        }
    };

    const res = await axios.request(options).catch((error: any) => {
        console.log(error)
        return error
    })
    return res.data
}
