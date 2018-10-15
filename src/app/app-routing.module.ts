import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./auth/signup/signup.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { HomeComponent } from "./home/home.component";
import { TodoComponent } from "./todo/todo.component";
import { AuthGuard } from "./auth/auth-guard.service";
const appRoutes : Routes = [
{path: '', component: HomeComponent},
{path: 'todo', component: TodoComponent, canActivate: [AuthGuard]},
{path:'signup' , component: SignupComponent},
{path:'signin' , component: SigninComponent}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}