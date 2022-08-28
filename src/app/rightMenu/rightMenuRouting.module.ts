import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RightMenuComponent } from './rightMenu.component';

const routes : Routes = [
    { path: '', component: RightMenuComponent }
];



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class RightMenuRoutingModule{

}
