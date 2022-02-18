import api from "./createApi";

class ServiceRequest {
  getData(){
    return api.get("/cartlist");
  }
  get(id) {
    return api.get(`/cartlist/${id}`);
  }

  create(data) {
    return api.post("/cartlist", data);
  }

  update(id, data) {
    return api.put(`/cartlist/${id}`, data);
  }

  delete(id) {
    return api.delete(`/cartlist/${id}`);
  }

  findByName(name) {
    return api.get(`/cartlist?name=${name}`);
  }
}

export default new ServiceRequest();