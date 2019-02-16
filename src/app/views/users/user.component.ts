import { Component, OnInit } from '@angular/core';
import { UserServices } from './user.services';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
    listUser: any = [];
    listPerPage: any;
    paginationOtp = {
        maxSize: 5,
        page: 1,
        perPage: 10,
        totalItem: 0,
        numPages: 0
    }
    fetchingData = false;

    constructor(
        private userServices: UserServices,
        private router: Router
    ) { }

    ngOnInit() {
        this.fetchData();
        this.listPerPage = this.userServices.getListPerPage();
    }

    onChangeOptionTable() {
        if (!this.fetchingData) {
            this.fetchData();
        }
    }

    onDelete(user) {
        let confirm = window.confirm(`Are you wanna delete ${user.first_name} ${user.last_name} ?`)
        if (confirm) {
            this.userServices.deleteUser(user).then((response) => {
                if (response.status) {
                    this.fetchData();
                    alert(`Delete User ${user.first_name} ${user.last_name} successful!`);
                } else {
                    alert(`Delete User ${user.first_name} ${user.last_name} failed!`);
                }
            });
        }
    }

    modifieUser(id) {
        if (id) {
            this.router.navigate([`users/edit/${id}`]);
        } else {
            this.router.navigate(['users/create-user']);
        }
    }

    viewUser(id) {
        this.router.navigate([`users/view/${id}`]);
    }

    fetchData() {
        this.fetchingData = true;
        this.userServices.getListUser(this.paginationOtp).then((response) => {
            this.listUser = [];
            this.listUser = response.data;
            this.paginationOtp.totalItem = response.totalItem;
            this.fetchingData = false;
        });
    }
}