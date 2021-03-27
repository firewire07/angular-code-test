import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public users: User[]  = [];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
  }
}

export interface User {
  id: number;
  name: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: number;
}

export interface Company {
  name: string;
  catchPharase: string;
  bs: string;
}
