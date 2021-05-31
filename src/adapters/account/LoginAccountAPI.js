import { fetchApi } from '../util/fetchApi';

const APIUrl = "https://cors-anywhere.herokuapp.com/https://ibank-api.staging-cpg.online/users/login";

const LoginAccountAPI = async (dataObject) => {

    const getResponse = async () => {
        const { isError, data, errorMessage } = await fetchApi(dataObject, "POST", APIUrl);

        if (isError) {
           

            return { errorMessage, isError };

        } else {
            
            return { data: data.data }
        }

    }


    const response = await getResponse();
    return response;

};

export default LoginAccountAPI;