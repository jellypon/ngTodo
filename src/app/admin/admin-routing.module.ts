import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {NewsComponent} from './news/news.component';

const routes: Routes = [
  { path: '', component: AdminComponent, children: [
    { path: '', component: HomeComponent},
    { path: 'news', component: NewsComponent}
  ]},
];
@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class AdminRoutingModule {}
