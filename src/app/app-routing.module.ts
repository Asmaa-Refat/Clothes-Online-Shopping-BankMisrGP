import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/services/guard/auth-guard';
import { AboutUsComponent } from './components/about-us/about-us.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'aboutUs', component: AboutUsComponent },

  {
    path: 'signUp',
    loadChildren: () =>
      import('./modules/sign-up/sign-up.module').then((m) => m.SignUpModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./modules/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],  //guard
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('./modules/categories/categories.module').then(
        (m) => m.ProductsModule
      ),
    canActivate: [AuthGuard],  //guard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
