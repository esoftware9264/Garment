import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTreeModule} from '@angular/material/tree';
import {MatSortModule} from '@angular/material/sort';
import {MatBadgeModule} from '@angular/material/badge';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatStepperModule} from '@angular/material/stepper';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
    declarations: [],
    imports: [MatSnackBarModule],
    exports: [MatStepperModule,MatRadioModule, MatAutocompleteModule, MatListModule, MatSidenavModule,MatTreeModule,
         CommonModule, MatMenuModule, MatCardModule, MatButtonModule, MatFormFieldModule, MatInputModule,MatProgressBarModule,
          MatIconModule, MatTableModule, MatPaginatorModule, MatGridListModule, MatDialogModule, MatSortModule,
           MatProgressSpinnerModule, MatSelectModule, MatToolbarModule, MatDatepickerModule, MatNativeDateModule,MatChipsModule,MatExpansionModule,
            MatCheckboxModule,MatToolbarModule,MatTabsModule,DragDropModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule,MatSnackBarModule]

})
export class MaterialModule {

}