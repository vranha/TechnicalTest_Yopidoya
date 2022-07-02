import { HomeComponent } from './pages/home/home.component';
import { ExerciceComponent } from './pages/exercice/exercice.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'exercice', component: ExerciceComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
