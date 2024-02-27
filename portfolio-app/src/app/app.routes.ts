import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

export const routes: Routes = [
    
    {path: 'about', component: AboutComponent,
        data: { animation: 'AboutPage' }},
    {path: 'contact', component: ContactComponent,
    data: { animation: 'ContactPage' }},
    {path: 'projects', component: ProjectsComponent,
    data: { animation: 'ProjectsPage' }},
    {path: 'projects/:id', component: ProjectDetailComponent,
    data: { animation: 'ProjectDetailPage' }},
    { path: '**', component: AboutComponent,
    data: { animation: 'AboutPage' }},
];
