import { NgModule } from '@angular/core';
import { RightMenuComponent } from './rightMenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightMenuRoutingModule } from './rightMenuRouting.module';


@NgModule({
    declarations: [RightMenuComponent],
    imports: [RightMenuRoutingModule],
    exports:[RightMenuComponent],
    providers:[]
})
export class LeftMenuModule {

}
