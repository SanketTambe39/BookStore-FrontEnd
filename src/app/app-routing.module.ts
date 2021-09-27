import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdataComponent } from './bookdata/bookdata.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: LoginComponent  },
  { path: "books", component: BookdataComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
