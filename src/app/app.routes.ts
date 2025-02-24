import { Routes } from "@angular/router";

import { routes as userRoutes } from "./users/users.routes";
import { NoTaskComponent } from "./tasks/no-task/no-task.component";
import { resolveTitle, resolveUserName, UserTasksComponent } from "./users/user-tasks/user-tasks.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
    {
        path: '', // <your-domain-naame>/
        component: NoTaskComponent,
        title: 'No task selected',
    },
    {
        path: 'users/:userId', // <your-domain-naame>/users/<uid>
        component: UserTasksComponent,  
        children: userRoutes,
        data: { //Adding Static data to Routes
            message:'Hello!' //Can be accessed by Inputs.
        },
        resolve: {
            userName: resolveUserName
        },
        title: resolveTitle
    },
    {
        path: '**',
        component: NotFoundComponent,
    }
];