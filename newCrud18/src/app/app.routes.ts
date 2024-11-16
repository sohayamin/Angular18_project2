import { Routes } from '@angular/router';
import { LayoutComponent } from '../components/layout/layout.component';
import { AddComponent } from '../components/add/add.component';
import { ListComponent } from '../components/list/list.component';
import { EditComponent } from '../components/edit/edit.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'list', component: ListComponent
            },
            {
                path: 'add', component: AddComponent
            },
            {
                path: 'edit/:id', component: EditComponent
            }
        ]
    }
];
