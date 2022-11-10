type Params = {
};

export const getUserData = async (params: Params) => {
    const res = await fetch(`http://localhost:8000/api/user/me`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.token}`
        }
    })
        .then(response => response.json())
        .catch(err => console.error(err))
    return res
}
