import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ClientComponent} from './client.component';
import {ClientRoutingModule} from './client-routing.module';
import {MaterialModule} from "../material.module";
import { AccountsComponent } from './accounts/accounts.component';
import { PaymentsComponent } from './payments/payments.component';


@NgModule({
  declarations: [ClientComponent, AccountsComponent, PaymentsComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    MaterialModule
  ]
})
export class ClientModule {
}
