import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [
    FormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class MaterialModule { }
