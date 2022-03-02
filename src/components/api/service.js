import api from "./createApi";

class ServiceRequest {
  getData(){
    return api.get("/cartlist");
  }
  get(id) {
    return api.get(`/cartlist/${id}`);
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

  create(data) {
    return api.post("/registered_users", data);
  }

  getUsersData(){
    return api.get("/registered_users")
  }

  getProductsData(){
    return api.get("/products")
  }
}

export default new ServiceRequest();