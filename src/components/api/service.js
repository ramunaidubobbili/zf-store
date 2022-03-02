import api from "./createApi";
import userApi from "./userApi";

class ServiceRequest {
  getData(){
    return api.get("/usersdata");
  }
  get(id) {
    return api.get(`/usersdata/${id}`);
  }

  create(data) {
    return api.post("/usersdata", data);
  }

  update(id, data) {
    return api.put(`/usersdata/${id}`, data);
  }

  delete(id) {
    return api.delete(`/usersdata/${id}`);
  }

  findByName(name) {
    return api.get(`/usersdata?name=${name}`);
  }

  getRegisteredUsersData(){
    return api.get("/registered_users");
  }
  
  findByRegistedName(name) {
    return api.get(`/registered_users?fullname=${name}`);
  }

  getStoresData(){
    return userApi.get("/store");
  }

  findByStoreName(name) {
    return userApi.get(`/store?fullname=${name}`);
  }

  getProductsData(){
    return api.get("/products");
  }

  findByProductName(name) {
    return api.get(`/products?name=${name}`);
  }

  deleteProduct(id) {
    return api.delete(`/products/${id}`);
  }
}

export default new ServiceRequest();