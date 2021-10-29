import { provideRoutes } from "@angular/router/src/router_module";
import { HomeComponent } from "./components/Home";
import { UserComponent } from "./components/User/user.component";

export const APP_ROUTES = [
  {
    path: "user",
    component: UserComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
];

export const APP_ROUTES_PROVIDER = [provideRoutes(APP_ROUTES)];
