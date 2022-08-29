import { NgModule } from '@angular/core';
import { TopMenuComponent } from './topMenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopMenuRoutingModule } from './topMenuRouting.module';


@NgModule({
    declarations: [TopMenuComponent],
    imports: [TopMenuRoutingModule],
    exports:[TopMenuComponent],
    providers:[]
})
export class TopMenuModule {

}
