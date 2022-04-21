import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/layout/menu/menu.component';
import { TableComponent } from './components/layout/table/table.component';
import { ThumbnailTableComponent } from './components/layout/thumbnail-table/thumbnail-table.component';
import { DialogComponent } from './components/pages/dialog/dialog.component';
import { ContentComponent } from './components/layout/content/content.component';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchByEmailByNamePipe } from './pipes/search-by-email-by-name.pipe';
import { SelectByDepartmentPipe } from './pipes/select-by-department.pipe';
import { NgbdDropdownBasicComponent } from './components/layout/ngbd-dropdown-basic/ngbd-dropdown-basic.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TableComponent,
    ThumbnailTableComponent,
    DialogComponent,
    ContentComponent,
    SearchByEmailByNamePipe,
    SelectByDepartmentPipe,
    NgbdDropdownBasicComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
