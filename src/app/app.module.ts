import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire/compat';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { HomeComponent } from './components/home/home.component';
import { QuestionComponent } from './components/home/question/question.component';
import { HomeRightSidebarComponent } from './components/home/home-right-sidebar/home-right-sidebar.component';
import { SpecificQuestionComponent } from './components/specific-question/specific-question.component';
import { QuestionRightSidebarComponent } from './components/specific-question/question-right-sidebar/question-right-sidebar.component';
import { UserQuestionComponent } from './components/profile/user-question/user-question.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { AnswerComponent } from './components/specific-question/answer/answer.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogRightSidebarComponent } from './components/blogs/blog-right-sidebar/blog-right-sidebar.component';
import { BlogContainerComponent } from './components/blogs/blog-container/blog-container.component';
import { SpecificBlogComponent } from './components/specific-blog/specific-blog.component';
import { RightSidebarBlogComponent } from './components/specific-blog/right-sidebar-blog/right-sidebar-blog.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageContainerComponent } from './components/messages/message-container/message-container.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { NotificationContainerComponent } from './components/notifications/notification-container/notification-container.component';
import { ShareModalComponent } from './components/share-modal/share-modal.component';
import { ChatComponent } from './components/messages/chat/chat.component';
import { SavedBlogsComponent } from './components/profile/saved-blogs/saved-blogs.component';
import { UserBlogsComponent } from './components/profile/user-blogs/user-blogs.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminlayoutComponent } from './components/admin/adminlayout/adminlayout.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { UserlayoutComponent } from './components/user/userlayout/userlayout.component';
import { UserReportsComponent } from './components/admin/user-reports/user-reports.component';
import { ReportReasonComponent } from './components/user/report-reason/report-reason.component';

import { DatetoMinutesPipe } from './shared/Pipes/dateto-minutes.pipe';
import { environment } from 'src/environments/environment';
import { HttpInterceptorInterceptor } from './Interceptor/http-interceptor.interceptor';

// MaterialUI Modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule } from '@angular/material/sort';
import { UserReportDetailsComponent } from './components/admin/user-report-details/user-report-details.component';
import { ConformationDialogComponent } from './components/admin/conformation-dialog/conformation-dialog.component';
import { QuestionReportsComponent } from './components/admin/question-reports/question-reports.component';
import { QuestionReportDetailsComponent } from './components/admin/question-report-details/question-report-details.component';
import { BlogReportDetailsComponent } from './components/admin/blog-report-details/blog-report-details.component';
import { BlogReportsComponent } from './components/admin/blog-reports/blog-reports.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ProfileComponent,
    EditProfileComponent,
    AuthButtonComponent,
    UserAuthComponent,
    AskQuestionComponent,
    HomeComponent,
    QuestionComponent,
    HomeRightSidebarComponent,
    SpecificQuestionComponent,
    QuestionRightSidebarComponent,
    AnswerComponent,
    DatetoMinutesPipe,
    UserQuestionComponent,
    PostBlogComponent,
    BlogsComponent,
    BlogRightSidebarComponent,
    BlogContainerComponent,
    SpecificBlogComponent,
    RightSidebarBlogComponent,
    MessagesComponent,
    MessageContainerComponent,
    NotificationsComponent,
    NotificationContainerComponent,
    ShareModalComponent,
    ChatComponent,
    SavedBlogsComponent,
    UserBlogsComponent,
    DashboardComponent,
    AdminlayoutComponent,
    AdminloginComponent,
    UserlayoutComponent,
    UserReportsComponent,
    ReportReasonComponent,
    UserReportDetailsComponent,
    ConformationDialogComponent,
    QuestionReportsComponent,
    QuestionReportDetailsComponent,
    BlogReportDetailsComponent,
    BlogReportsComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ShareButtonsModule,
    ShareIconsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatRadioModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatSortModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
