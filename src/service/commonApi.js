import axios from "axios";
import toast from "react-hot-toast";

const commonApi = async (apiUrl, apiMethod, apiHeaders, apiBody) => {
    const config = {
        url: apiUrl,
        method: apiMethod,
        headers: apiHeaders ? apiHeaders : {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${sessionStorage.getItem('token')}`
        },
        data: apiBody
    }

    return await axios(config).then(res => res).catch((error) => {
        if (error.response.data.message) {
            toast.error(error.response.data.message)
        }
        console.log(error);
        return error
    })
}

export default commonApi