import { DonateComponent } from './../donate/donate.component';
import { GalleryComponent } from './../gallery/gallery.component';
import { AboutUsComponent } from './../about-us/about-us.component';
import { HomePageComponent } from './../home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomePageComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'donate', component: DonateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
