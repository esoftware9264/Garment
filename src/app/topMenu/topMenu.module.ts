import { NgModule } from '@angular/core';
import { TopMenuComponent } from './topMenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RightMenuRoutingModule } from './topMenuRouting.module';


@NgModule({
    declarations: [TopMenuComponent],
    imports: [RightMenuRoutingModule],
    exports:[TopMenuComponent],
    providers:[]
})
export class LeftMenuModule {

}
