import parseError from "./parseError";

const axios = require("axios").default;

/**
 *
 * @param {any} dataObject
 * @returns Promise<{ isError : boolean; data?: { message : { data : any }}; errorMessage ?: string}>
 */

export const fetchApi = async (dataObject, method, url, headers) => {
  try {
    const { data } = await axios({
      method: method,

      url,

      data: dataObject,

      timeout: 60000,

      headers: headers
    });

    return { isError: false, data };
  } catch (error) {
    return parseError(error);
  }
};

// PATCH updateprofile