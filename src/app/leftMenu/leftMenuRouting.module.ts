import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeftMenuComponent } from './leftMenu.component';

const routes : Routes = [
    { path: '', component: LeftMenuComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class LeftMenuRoutingModule{

}
