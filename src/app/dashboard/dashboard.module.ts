import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardRoutingModule } from './dashboardRouting.module';


@NgModule({
    declarations: [DashboardComponent],
    imports: [DashboardRoutingModule],
    exports:[DashboardComponent],
    providers:[]
})
export class DashboardModule {

}
