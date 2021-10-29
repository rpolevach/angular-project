import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
// import { NgRedux, NgReduxModule } from "ng2-redux";

import { AppComponent } from "./containers/app.component";
import { HomeComponent } from "./components/Home/home.component";
import { HttpModule } from "@angular/http";

import { RouterModule } from "@angular/router";
import { UserComponent } from "./components/User/user.component";
import { IAppState, rootReducer } from "./store";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "user/:id", component: UserComponent },
    ]),
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  declarations: [AppComponent, HomeComponent, UserComponent],
  bootstrap: [AppComponent],
})
export class AppModule {
  // constructor(ngRedux: NgRedux<IAppState>) {
  //   ngRedux.configureStore(rootReducer, {});
  // }
}
