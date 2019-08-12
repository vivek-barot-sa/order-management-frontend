import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from '../Helpers/auth.service';
import { EventService } from '../Helpers/event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService }  from './token-interceptor.service';
import { PurveyorDashboardComponent } from './purveyor-dashboard/purveyor-dashboard.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { OffersComponent } from './offers/offers.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent,
    PurveyorDashboardComponent,
    CustomerDashboardComponent,
    UpdateProfileComponent,
    SearchCustomerComponent,
    OffersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthService, AuthGuard, EventService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
