import { Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: "course", component: CourseComponent },
    { path: "", redirectTo: "course", pathMatch: "full" },
    {path: '404', component: NotFoundComponent},
    {path: '**', component: NotFoundComponent},
];
