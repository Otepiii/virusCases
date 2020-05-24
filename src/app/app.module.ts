import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CasesComponent } from './cases/cases.component';
import { EditCasesComponent } from './edit-cases/edit-cases.component';
import { AddCasesComponent } from './add-cases/add-cases.component';
import { CasesDetailsComponent } from './cases-details/cases-details.component';
import { CasesStatComponent } from './cases-stat/cases-stat.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    EditCasesComponent,
    AddCasesComponent,
    CasesDetailsComponent,
    CasesStatComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
