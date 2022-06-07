import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { SearchComponent } from './component/search/search.component';
import { FiltersComponent } from './component/filters/filters.component';
import { MainComponent } from './component/main/main.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ArrowsComponent } from './component/filters/arrows/arrows.component';
import { ModalComponent } from './component/main/modal/modal.component';
import { LegendComponent } from './component/legend/legend.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    SearchComponent,
    FiltersComponent,
    MainComponent,
    NavbarComponent,
    ArrowsComponent,
    ModalComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDialogModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
