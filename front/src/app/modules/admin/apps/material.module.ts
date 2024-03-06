import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSelectModule } from '@angular/material/select';
// import { NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { FuseAlertModule } from '@fuse/components/alert';
import { PaginatorI18n } from './CustomPaginator';
import { MatTreeModule } from '@angular/material/tree';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguagesModule } from 'app/layout/common/languages/languages.module';
import { TranslocoService } from '@ngneat/transloco';
import { MatSortModule } from '@angular/material/sort';
import { CdkScrollableModule, ScrollingModule } from '@angular/cdk/scrolling';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SharedModule } from 'app/shared/shared.module';
import { FuseCardModule } from '@fuse/components/card';
import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [],
  providers: [
    { provide: MatPaginatorIntl, deps: [TranslocoService],  useFactory: (translocoService: TranslocoService) => new PaginatorI18n(translocoService).getPaginatorIntl() }
  ],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSelectModule,
    // NgxMaterialTimepickerModule,
    MatSidenavModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatMenuModule,
    FuseAlertModule,
    MatTreeModule,
    MatChipsModule,
    MatTooltipModule,
    TranslocoModule,
    LanguagesModule,
    CdkScrollableModule,
    MatRadioModule,
    ScrollingModule,
    CdkAccordionModule,
    MatSortModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatProgressBarModule,
    SharedModule,
    FuseCardModule,
    MatBadgeModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatTabsModule,
    MatExpansionModule,
    MatCheckboxModule,
    DragDropModule,
    ReactiveFormsModule,
    MatSelectModule,
    // NgxMaterialTimepickerModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatMenuModule,
    FuseAlertModule,
    MatTreeModule,
    MatChipsModule,
    MatTooltipModule,
    TranslocoModule,
    LanguagesModule,
    CdkScrollableModule,
    MatRadioModule,
    ScrollingModule,
    CdkAccordionModule,
    MatSortModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatProgressBarModule,
    SharedModule,
    FuseCardModule,
    MatBadgeModule
  ]
})
export class MaterialModule { }
