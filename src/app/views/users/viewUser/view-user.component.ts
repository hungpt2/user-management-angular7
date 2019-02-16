import { Component, OnInit } from '@angular/core';
import { UserServices } from '../user.services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

    idUser: any;
    userProfile: any;

    constructor(
        private userServices: UserServices,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.idUser = this.route.snapshot.paramMap.get('id');
        this.userProfile = this.userServices.getUserById(this.idUser);
    }

    editUser() {
        this.router.navigate([`users/edit/${this.idUser}`]);
    }

}
