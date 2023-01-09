import axios from "axios";

type Params = {
};

export const getUserData = async (params: Params) => {
    const options = {
        method: 'GET',
        url: 'https://test-uy42.onrender.com/api/user/me',
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
