import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ExerciceComponent } from './pages/exercice/exercice.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ContributorsComponent } from './pages/exercice/contributors/contributors.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './pages/exercice/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ExerciceComponent,
    HomeComponent,
    ContributorsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
