import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { ViewUserComponent } from './viewUser/view-user.component';
import { EditUserComponent } from './editUser/edit-user.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: UserComponent,
        data: {
          title: 'List User'
        }
      },
      {
        path: 'view/:id',
        component: ViewUserComponent,
        data: {
          title: 'View User'
        }
      },
      {
        path: 'edit/:id',
        component: EditUserComponent,
        data: {
          title: 'View User'
        }
      },

      {
        path: 'create-user',
        component: EditUserComponent,
        data: {
          title: 'Create User'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
