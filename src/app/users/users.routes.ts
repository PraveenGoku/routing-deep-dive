import { Routes } from "@angular/router";
import { TasksComponent } from "../tasks/tasks.component";
import { NewTaskComponent } from "../tasks/new-task/new-task.component";

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'tasks',
        pathMatch:'prefix'
    },
    {
        path: 'tasks', // <your-domain-naame>/users/<uid>/tasks
        component: TasksComponent,
        // runGuardsAndResolvers: 'paramsOrQueryParamsChange',
        // resolve: {
        //     userTasks: resolveUserTasks,
        // }
    },
    {
        path: 'tasks/new', // <your-domain-naame>/users/<uid>/tasks/new
        component: NewTaskComponent,
    },
]