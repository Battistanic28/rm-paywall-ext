import axios from 'axios';

export const getCachedPage = async (url: string) => {
    const baseUrl = 'http://archive.org/wayback/available?url=';

    const apiUrl = `${baseUrl}${url}`;
    const response = await axios.get(apiUrl);

    const responseUrl = response.data.archived_snapshots.closest.url
    console.log(responseUrl)

    return responseUrl
}
