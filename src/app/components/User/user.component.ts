import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import "rxjs/add/operator/switchMap";
import { User } from "../../model/User";
import { HomeService } from "../../services/home.service";

@Component({
  moduleId: module.id,
  selector: "user",
  templateUrl: "user.component.html",
  styleUrls: ["user.component.css"],
  providers: [HomeService],
})
export class UserComponent implements OnInit {
  userId: number;
  userInfo: User = {
    email: "",
    first_name: "",
    id: -1,
    last_name: "",
  };

  constructor(
    private route: ActivatedRoute,
    private _httpService: HomeService,
    private router: Router
  ) {
    this.userId = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getUser(this.userId);
  }

  getUser(id: number) {
    return this._httpService.getUser(id).subscribe((data) => {
      let user: User = data.json().data;

      this.userInfo = new User(
        user.id,
        user.first_name,
        user.last_name,
        user.email
      );
    });
  }

  editUser() {
    return this._httpService.editUser(this.userInfo).subscribe((data) => {
      console.log(data);

      this.router.navigate([""]);
    });
  }
}
