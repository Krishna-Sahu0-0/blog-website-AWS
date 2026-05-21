// Set the backend base URL here. Change this to your server IP/host and port.
// Example: http://your-server:3000
window.API_BASE_URL =  "http://13.53.48.174:3000";

window.apiUrl = window.apiUrl || function (path) {
    return `${window.API_BASE_URL}${path}`;
};