import { NgModule } from '@angular/core';
import { LeftMenuComponent } from './leftMenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LeftMenuRoutingModule } from './leftMenuRouting.module';

@NgModule({
    declarations: [LeftMenuComponent],
    imports: [LeftMenuRoutingModule],
    exports:[LeftMenuComponent],
    providers:[]  
})
export class LeftMenuModule {    

}
