import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinksComponent } from './links/links.component';
import { EnvironmentSpecificResolver } from './core/services/environment-specific-resolver.service';

const routes: Routes = [
  {
    path: '', component: LinksComponent,
    resolve: { envSpecific: EnvironmentSpecificResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EnvironmentSpecificResolver]
})
export class AppRoutingModule { }
