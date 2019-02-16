import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { UserRoutingModule } from './user-routing.module';
import { UserServices } from './user.services';
import { CommonModule } from '@angular/common';  
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { UserComponent } from './user.component';
import { ViewUserComponent } from './viewUser/view-user.component';
import { EditUserComponent } from './editUser/edit-user.component';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    UserRoutingModule,
    ChartsModule,
    PaginationModule.forRoot(),
    BsDropdownModule
  ],
  declarations: [ 
      UserComponent,
      ViewUserComponent,
      EditUserComponent
    ],
  providers: [
    UserServices
  ],
})
export class UserModule { }
