import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopMenuComponent } from './topMenu.component';

const routes : Routes = [
    { path: '', component: TopMenuComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports :[RouterModule]
})
export class TopMenuRoutingModule{

}
