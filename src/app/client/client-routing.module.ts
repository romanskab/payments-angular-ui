import {NgModule} from '@angular/core';
import {ClientComponent} from './client.component';
import {RouterModule, Routes} from '@angular/router';
import {AccountsComponent} from './accounts/accounts.component';
import {PaymentsComponent} from './payments/payments.component';

const routes: Routes = [
  {path: '', component: ClientComponent, children: [
      {path: 'accounts', component: AccountsComponent},
      {path: 'payments', component: PaymentsComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ClientRoutingModule {
}
