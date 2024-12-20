import { Routes } from '@angular/router';
import { MonsterListComponent } from './pages/monster-list/monster-list.component';
import { MonsterComponent } from './pages/monster/monster.component';

export const routes: Routes = [
    {
        path: 'home',
        component: MonsterListComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'monster',
        children: [
            {
                path: '',
                component: MonsterComponent
            },
            {
                path: ':id',
                component: MonsterComponent
            }
        ]
    }
];
