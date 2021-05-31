import { fetchApi } from '../util/fetchApi';

const APIUrl = "https://ibank-api.staging-cpg.online/users/register";

const OpenAccountAPI = async (dataObject) => {

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

export default OpenAccountAPI;