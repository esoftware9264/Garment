import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './loginRouting.module';
import { MaterialModule } from '../material.module';
import { MatInputModule } from '@angular/material/input';


@NgModule({
    declarations: [LoginComponent],
    imports: [LoginRoutingModule,MaterialModule,FormsModule, ReactiveFormsModule,MatInputModule],
    exports:[LoginComponent],
    providers:[]
})
export class LoginModule {

}
