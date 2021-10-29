import { Component } from "@angular/core";
import { HomeComponent } from "../components/Home/home.component";

@Component({
  moduleId: module.id,
  selector: "my-app",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
})
export class AppComponent {
  name = "Angular";
}
