import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { ListComponent } from './components/list/list.component';
import {UsersRoutingModule} from './users-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import {UserService} from './services/user.service';
import {TableModule} from 'primeng/table';



@NgModule({
  declarations: [RegisterComponent, ListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    TableModule
  ],
  providers: [
    HttpClientModule,
    UserService
  ]
})
export class UsersModule { }
