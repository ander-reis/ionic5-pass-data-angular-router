import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {DataResolverService} from './resolver/data-resolver.service';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {path: 'details', loadChildren: './details/details.module#DetailsPageModule'},
    {
        path: 'details/:id',
        resolve: {
            special: DataResolverService
        },
        loadChildren: () => import('./details/details.module').then(m => m.DetailsPageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
