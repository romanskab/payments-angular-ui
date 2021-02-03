import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import {AdminRoutingModule} from './admin-routing.module';
import {MaterialModule} from '../material.module';
import { ClientsComponent } from './clients/clients.component';
import { RequestsComponent } from './requests/requests.component';



@NgModule({
  declarations: [AdminComponent, ClientsComponent, RequestsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule
  ]
})
export class AdminModule { }
