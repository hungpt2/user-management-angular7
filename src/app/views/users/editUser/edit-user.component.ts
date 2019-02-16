import { Component, OnInit } from '@angular/core';
import { UserServices } from '../user.services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  idUser: any;
  userProfile = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    ip_address: '',
    gender: ''
  };
  userForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private userServices: UserServices,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  get f() {
    return this.userForm.controls;
  }

  ngOnInit() {
    this.idUser = this.route.snapshot.paramMap.get('id');
    this.userProfile = this.userServices.getUserById(this.idUser);
    this.userProfile = this.userProfile
      ? this.userProfile
      : {
          id: '',
          first_name: '',
          last_name: '',
          email: '',
          ip_address: '',
          gender: ''
        };
    this.userForm = this.formBuilder.group({
      id: [this.userProfile.id],
      first_name: [this.userProfile.first_name, Validators.required],
      last_name: [this.userProfile.last_name, Validators.required],
      email: [this.userProfile.email, [Validators.required, Validators.email]],
      gender: [this.userProfile.gender, [Validators.required]],
      ip_address: [this.userProfile.ip_address]
    });
  }

  saveUser() {
    this.submitted = true;
    if (!this.userForm.invalid) {
      if (this.idUser) {
        this.userServices.updateUser(this.userForm.value).then(response => {
          if (response.status) {
            this.router.navigate([`users`]);
          }
        });
      } else {
        this.userServices.createUser(this.userForm.value).then(response => {
          if (response.status) {
            this.router.navigate([`users`]);
          }
        });
      }
      this.submitted = false;
    }
  }
}
