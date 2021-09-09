import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReleasesComponent } from './releases/releases.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'releases', component:ReleasesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
