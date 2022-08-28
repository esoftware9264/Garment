import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './loginRouting.module';


@NgModule({
    declarations: [LoginComponent],
    imports: [LoginRoutingModule],
    exports:[LoginComponent],
    providers:[]
})
export class LoginModule {

}
