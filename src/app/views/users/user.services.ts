import { Injectable } from '@angular/core';
import { listUser, listPerPage } from './data';
import cloneDeep from 'lodash.clonedeep';

@Injectable()
export class UserServices {
  mockData: any = listUser;

  constructor() {}

  getListUser(dataPost: any) {
    const index = (dataPost.page - 1) * dataPost.perPage;
    return Promise.resolve({
      data: [...this.mockData].splice(index, dataPost.perPage),
      totalItem: this.mockData.length
    });
  }

  getListPerPage() {
    return [...listPerPage];
  }

  deleteUser(user) {
    const index = this.mockData.indexOf(user);
    if (index > -1) {
      this.mockData.splice(index, 1);
      return Promise.resolve({
        status: true
      });
    } else {
      return Promise.resolve({
        status: false
      });
    }
  }

  getUserById(id) {
    const userResult = this.mockData.filter(user => user.id.toString() === id);
    return cloneDeep(userResult[0]);
  }

  updateUser(user) {
    let flag = false;
    for (let index = 0; index < this.mockData.length; index++) {
      const element = this.mockData[index];
      if (element.id === user.id) {
        this.mockData[index] = Object.assign({}, user);
        flag = true;
        break;
      }
    }
    return Promise.resolve({
      status: flag
    });
  }

  createUser(user) {
    user.id = this.makeid();
    this.mockData.unshift(user);
    return Promise.resolve({
      status: true
    });
  }

  makeid() {
    let text = '';
    const possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}
