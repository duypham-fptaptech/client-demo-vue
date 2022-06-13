import http from "../http-common";
class Image {
    getAll() {
        return http.get(`/image`);
    }
}
export default new Image();
