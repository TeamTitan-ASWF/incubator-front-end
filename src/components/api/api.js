import axios from 'axios';

// use this to toggle between live server and localhost
// noinspection DuplicatedCode
const useRemote = true;

const SERVER_API_URL_APPLICATIONS = 'http://ec2-18-216-140-13.us-east-2.compute.amazonaws.com:8080/';

const LOCAL_API_URL_APPLICATIONS = 'http://localhost:8080/';

const currentAppAPI = (useRemote) ? SERVER_API_URL_APPLICATIONS : LOCAL_API_URL_APPLICATIONS;


const apiCall = async (entity, action, newData, path = '') => {
    let apiErrorMsg = '';
    let wasError = false;
    let apiData;
    let apiURL;

    switch (entity) {
        case "application":
            apiURL = currentAppAPI;
            break;
        default:
            apiURL = 'should not get here';
    }

    switch (action) {
        case 'list':
            try {
                const res = await axios.get(apiURL + path);
                apiData = await res.data;
            } catch (err) {
                wasError = true;
                apiErrorMsg = err;
            }
            break;

        case 'read':
            try {
                const res = await axios.get(apiURL + newData);
                apiData = await res.data;
            } catch (err) {
                wasError = true;
                apiErrorMsg = err;
            }
            break;

        case 'add':
            try {
                const res = await axios.post(apiURL, newData);
                apiData = await res.data;
            } catch (err) {
                wasError = true;
                apiErrorMsg = err;
            }
            break;

        case 'update':
            try {
                const res = await axios.patch(apiURL + newData.id, newData);
                apiData = await res.data;
            } catch (err) {
                wasError = true;
                apiErrorMsg = err;
            }
            break;

        case 'delete':
            try {
                const res = await axios.delete(apiURL + newData);
                apiData = await res.data;
            } catch (err) {
                wasError = true;
                apiErrorMsg = err;
            }
            break;

        default:
            console.log('should not get here.');
            wasError = true;
            apiErrorMsg = 'should not get here.';
    }

    return {apiData, wasError, apiErrorMsg };
};

export default apiCall;
