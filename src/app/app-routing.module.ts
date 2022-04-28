import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import { WorksComponent } from './pages/works/works.component';
import { CenzorComponent } from './pages/works/cenzor/cenzor.component';
import { TaskListComponent } from './pages/works/taskList/taskList.component';
import { UserListComponent } from './pages/works/userList/userList.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'works', component: WorksComponent, children: [
    { path: 'cenzor', component: CenzorComponent },
    { path: 'tasklist', component: TaskListComponent },
    { path: 'userlist', component: UserListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
