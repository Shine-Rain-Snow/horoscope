import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// const routes: Routes = [
//   {
//     path: 'main',
//     loadChildren: () => import('./main/main.module').then(mod => mod.MainModule)
//   },
//   {
//     path: 'intro',
//     loadChildren: () => import('./intro/intro.module').then(mod => mod.IntroModule)
//   },
//   {
//     path: 'tarot',
//     loadChildren: () => import('./tarot/tarot.module').then(mod => mod.TarotModule)
//   },
//   {
//     path: 'counseling',
//     loadChildren: () => import('./counseling/counseling.module').then(mod => mod.CounselingModule)
//   },
//   {
//     path: 'astrology',
//     loadChildren: () => import('./astrology/astrology.module').then(mod => mod.AstrologyModule)
//   },
//   {
//     path: 'contact',
//     loadChildren: () => import('./contact/contact.module').then(mod => mod.ContactModule)
//   },
//   {
//     path: 'about',
//     loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule)
//   },
//   {
//     path: '',
//     redirectTo: '',
//     pathMatch: 'full'
//   }
// ];

import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { TarotComponent } from './tarot/tarot.component';
import { CounselingComponent } from './counseling/counseling.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: 'intro',
    component: IntroComponent,
  },
  {
    path: 'tarot',
    component: TarotComponent,
  },
  {
    path: 'counseling',
    component: CounselingComponent,
  },
  {
    path: 'astrology',
    component: AstrologyComponent,  
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about',
    component:AboutComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }