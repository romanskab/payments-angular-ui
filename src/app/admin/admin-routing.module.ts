import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ClientsComponent} from './clients/clients.component';
import {RequestsComponent} from './requests/requests.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {path: 'clients', component: ClientsComponent},
      {path: 'requests', component: RequestsComponent}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
