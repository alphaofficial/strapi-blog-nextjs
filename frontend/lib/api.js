import axios from 'axios'

export const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    validateStatus: function (status) {
        return status < 500 // Don't resolve status beyond 500
    }
})

export const getStrapiURL = (path = "") => {
    return `${
        process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}
  
// Helper to make GET requests to Strapi
export const fetchAPI = async (path) => {
    const requestUrl = getStrapiURL(path);
    const response = await API.get(requestUrl)
    const data = await response.data;
    return data;
}

/**
 * The fetchAPI function will first get the request url thanks to the getStrapiURL function above.
Then it will simply call the fetch function on this requestUrl and return the data in json format.
 */