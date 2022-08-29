import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboardRouting.module';
import { TopMenuModule } from '../topMenu/topMenu.module';
import { LeftMenuModule } from '../leftMenu/leftMenu.module';


@NgModule({
    declarations: [DashboardComponent],
    imports: [DashboardRoutingModule,TopMenuModule,LeftMenuModule],
    exports:[DashboardComponent],
    providers:[]
})
export class DashboardModule {

}
