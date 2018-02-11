import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ManagementComponent } from './management/management.component';
import { RolComponent } from './management/rol/rol.component';
import { UserComponent } from './management/user/user.component';
import { ConnectionComponent } from './management/connection/connection.component';

const appRoutes: Routes = [
  { path: 'Configuration/Login', component: LoginComponent },
  { path: 'Configuration/Management', component: ManagementComponent },
  { path: '', component: ErrorComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent,
    ManagementComponent,
    RolComponent,
    UserComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
