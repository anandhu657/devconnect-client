import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProfileComponent } from './components/profile/edit-profile/edit-profile.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserAuthComponent } from './components/user-auth/user-auth.component';
import { AuthGuard } from './shared/Auth/auth.guard';
import { AccessGuard } from './shared/Auth/access.guard';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SpecificQuestionComponent } from './components/specific-question/specific-question.component';
import { PostBlogComponent } from './components/post-blog/post-blog.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SpecificBlogComponent } from './components/specific-blog/specific-blog.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { AdminlayoutComponent } from './components/admin/adminlayout/adminlayout.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { AdminloginComponent } from './components/admin/adminlogin/adminlogin.component';
import { UserlayoutComponent } from './components/user/userlayout/userlayout.component';
import { AdminAuthGuard } from './shared/Auth/admin-auth.guard';
import { AdminAccessGuard } from './shared/Auth/admin-access.guard';
import { UserReportsComponent } from './components/admin/user-reports/user-reports.component';
import { UserReportDetailsComponent } from './components/admin/user-report-details/user-report-details.component';
import { QuestionReportsComponent } from './components/admin/question-reports/question-reports.component';
import { QuestionReportDetailsComponent } from './components/admin/question-report-details/question-report-details.component';
import { BlogReportsComponent } from './components/admin/blog-reports/blog-reports.component';
import { BlogReportDetailsComponent } from './components/admin/blog-report-details/blog-report-details.component';
import { HomeComponent } from './components/user/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: "login", component: UserAuthComponent, canActivate: [AuthGuard]
  },
  {
    path: '',
    component: UserlayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'questions',
        component: QuestionsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'question/:id',
        component: SpecificQuestionComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'blogs',
        component: BlogsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'blogs/:id',
        component: SpecificBlogComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'blog/post',
        component: PostBlogComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'message',
        component: MessagesComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'notification',
        component: NotificationsComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'ask-question',
        component: AskQuestionComponent,
        canActivate: [AccessGuard]
      },
      {
        path: 'profile/:user',
        component: ProfileComponent,
        canActivate: [AccessGuard],
        children: [
          {
            path: 'editProfile',
            component: EditProfileComponent
          }
        ]
      },
    ]
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
    canActivate: [AdminAuthGuard]
  },
  {
    path: 'admin',
    component: AdminlayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/user',
        component: UserReportsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/user/:id',
        component: UserReportDetailsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/question',
        component: QuestionReportsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/question/:id',
        component: QuestionReportDetailsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/blog',
        component: BlogReportsComponent,
        canActivate: [AdminAccessGuard]
      },
      {
        path: 'report/blog/:id',
        component: BlogReportDetailsComponent,
        canActivate: [AdminAccessGuard]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
