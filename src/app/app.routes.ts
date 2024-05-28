import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { adminRoutes } from './admin/admin.routes';
import { formConfirmExitGuard } from './core/guards/form/form-confirm-exit.guard';
import { ContactComponent } from './pages/contact/contact-page.component';
import { instructorRoutes } from './instructor/instructor.routes';
import { ChatPageComponent } from './pages/chat-page/chat-page.component';
import { BootcampListPageComponent } from './pages/bootcamp-list-page/bootcamp-list-page.component';
import { AnnouncementsComponent } from './pages/announcements/announcements.component';



export const routes: Routes = [
   { path: '', component: HomePageComponent }, 
   { path: 'login', component: LoginComponent },
   { path: 'register', component: RegisterComponent, canDeactivate:[formConfirmExitGuard] },
   { path:'contact',component:ContactComponent},
   { path:'chat',component: ChatPageComponent},
   { path:'bootcamps',component:BootcampListPageComponent},
   { path:'announcements', component:AnnouncementsComponent},

   //Admin
   { path: 'admin', children: adminRoutes },
   //Instructor
   { path: 'instructor', children: instructorRoutes },
   
];
