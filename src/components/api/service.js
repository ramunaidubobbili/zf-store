import api from "./createApi";

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
}

export default new ServiceRequest();