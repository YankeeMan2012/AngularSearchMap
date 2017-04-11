import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'search', loadChildren: 'app/searchComponent/search.module#SearchModule' },
    { path: '**', redirectTo: 'search' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);