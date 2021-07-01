import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PersonageComponent } from './personage/personage.component';
import { StaffComponent } from './staff/staff.component';
import { AddComponent } from './students/child/add/add.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'prefix'
  },
  { path: 'personages',
    component: PersonageComponent,
    pathMatch: 'full'
  },
  { path: 'students',
    component: StudentsComponent,
    pathMatch: 'full'
  },
  { path: 'students/add',
    component: AddComponent,
    pathMatch: 'full'
  },
  { path: 'staff',
    component: StaffComponent,
    pathMatch: 'full'
  },
  { path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
