import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { PurveyorDashboardComponent } from './purveyor-dashboard/purveyor-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'searchcustomer',
    component: SearchCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'updateProfile',
    component: UpdateProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'purveyorDashboard',
    component: PurveyorDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customerDashboard',
    component: CustomerDashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'special',
    component: SpecialEventsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
