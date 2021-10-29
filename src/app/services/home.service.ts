import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class HomeService {
  constructor(private _http: Http) {}

  getUsers() {
    return this._http.get("https://reqres.in/api/users?page=2");
  }

  getUser(id: number) {
    return this._http.get(`https://reqres.in/api/users?id=${id}`);
  }

  deleteUser(id: number) {
    return this._http.delete(`https://reqres.in/api/users/${id}`);
  }

  editUser(userInfo: any) {
    return this._http.put(
      `https://reqres.in/api/users/${userInfo.id}`,
      userInfo
    );
  }

  getResources() {
    return this._http.get("https://reqres.in/api/unknown");
  }
}
