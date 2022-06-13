import axios from "axios";
export default axios.create({
    baseURL: "http://localhost:8082/api/v1/google",
    headers: {
        "Content-type": "application/json"
    }
});