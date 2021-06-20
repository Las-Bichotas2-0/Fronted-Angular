import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { MoreSpokenComponent } from './more-spoken/more-spoken.component';
import { RankingStudentComponent } from './ranking-student/ranking-student.component';

//Material
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CallToRegisterComponent } from './call-to-register/call-to-register.component';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { MatChipsModule } from '@angular/material/chips';
import { BadgeComponent } from './badge/badge.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { SessionComponent } from './session/session.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from "@angular/forms";
import { DialogSessionComponent } from './session/dialog-session/dialog-session.component';
import { RegisterRoleComponent } from './register-role/register-role.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TuthorRegisterComponent } from './tuthor-register/tuthor-register.component';
import {MatSelectModule} from '@angular/material/select';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    CallToRegisterComponent,
    MoreSpokenComponent,
    TestimonialsComponent,
    FooterComponent,
    RankingStudentComponent,
    FeedbackComponent,
    DialogComponent,
    ProfileComponent,
    BadgeComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    MainComponent,
    SessionComponent,
    DialogSessionComponent,
    RegisterRoleComponent,
    SubscriptionsComponent,
    StudentRegisterComponent,
    TuthorRegisterComponent,
    TermsConditionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatChipsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
