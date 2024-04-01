import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { BackgroundComponent } from './pages/background/background.component';
import { EducationComponent } from './pages/education/education.component';
import { CertificatesComponent } from './pages/certificates/certificates.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';

export const routes: Routes = [
    {
        path: '', component: HomeComponent 
    },
    {
        path: 'home', component: HomeComponent
    },
    {
        path: 'experience', component: AboutComponent
    },
    {
        path: 'background', component: BackgroundComponent
    },
    {
        path: 'education', component: EducationComponent
    },
    {
        path: 'certificates', component: CertificatesComponent
    },
    {
        path: 'hobbies', component: HobbiesComponent
    }
];
