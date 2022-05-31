import axios from 'axios';

// use this to toggle between live server and localhost
// noinspection DuplicatedCode
const useRemote = false;

const SERVER_API_URL_APPLICATIONS = 'https://cors-everywhere-me.herokuapp.com/http://ec2-18-216-140-13.us-east-2.compute.amazonaws.com:8080/';

const SERVER_API_URL_CREATE_USER = 'https://cors-everywhere-me.herokuapp.com/http://ec2-18-216-140-13.us-east-2.compute.amazonaws.com:8080/create_user';

const SERVER_API_URL_LOGIN = 'https://cors-everywhere-me.herokuapp.com/http://ec2-18-216-140-13.us-east-2.compute.amazonaws.com:8080/login';

const LOCAL_API_URL_APPLICATIONS = 'http://localhost:8080/';


const LOCAL_API_URL_CREATE_USER = 'http://localhost:8080/create_user';
const LOCAL_API_URL_LOGIN = 'http://localhost:8080/login';


const currentAppAPI = (useRemote) ? SERVER_API_URL_APPLICATIONS : LOCAL_API_URL_APPLICATIONS;

const currentCreateUserAppAPI = (useRemote) ? SERVER_API_URL_CREATE_USER : LOCAL_API_URL_CREATE_USER;

const currentLoginAPI = (useRemote) ? SERVER_API_URL_LOGIN : LOCAL_API_URL_LOGIN;


const apiCall = async (entity, action, newData, path = '') => {
    let apiErrorMsg = '';
    let wasError = false;
    let apiData;
    let apiURL;

    switch (entity) {
        case "application":
            apiURL = currentAppAPI + (path ? path : '');
            break;

            case "createUser":
                apiURL = currentCreateUserAppAPI + (path ? path : '');
                break;
                case "login":
                    apiURL = currentLoginAPI + (path ? path : '');
                    break;
        default:
            apiURL = 'should not get here';
    }

    switch (action) {
        case 'list':
            try {
                const res = await axios.get(apiURL);
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
