import { Component, OnInit } from "@angular/core";
import { HomeService } from "../../services/home.service";

@Component({
  moduleId: module.id,
  selector: "app-home",
  templateUrl: "home.component.html",
  styleUrls: ["home.component.css"],
  providers: [HomeService],
})
export class HomeComponent implements OnInit {
  users: UserResponse = {
    data: [],
  };
  resources: UserResponse = {
    data: [],
  };

  constructor(private _httpService: HomeService) {}

  ngOnInit() {
    this.getUsers();
    this.getResources();
  }

  getUsers() {
    return this._httpService.getUsers().subscribe((data) => {
      this.users = data.json();
    });
  }

  deleteUser(id: number) {
    return this._httpService.deleteUser(id).subscribe((data) => {
      // this.getUsers();

      // fake date deletion
      this.users.data = this.users.data.filter((value: any) => value.id !== id);

      console.log(this.users);
    });
  }

  getResources() {
    return this._httpService.getResources().subscribe((data) => {
      this.resources = data.json();
    });
  }
}

type UserResponse = {
  data: any;
};
