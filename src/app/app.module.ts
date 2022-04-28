import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';

import { HomeComponent } from './pages/home/home.component';

import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TaskListComponent } from './pages/works/taskList/taskList.component';
import { UserListComponent } from './pages/works/userList/userList.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './shared/services/users.service';
import { TasksTableComponent } from './pages/works/taskList/tasks-table/tasks-table.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    WorksComponent,
    CenzorComponent,
    TaskListComponent,
    UserListComponent,
    TasksTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
