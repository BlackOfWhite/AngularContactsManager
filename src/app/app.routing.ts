import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { LoginComponent } from './components/auth/login.component';
import { LogoutComponent } from './components/auth/logout.component';
import { ContactComponent } from './components/contact.component';

const appRoutes: Routes = [
    {
        path: 'users',
        component: UserComponent
    },
    {
        path: 'users/all',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'contacts',
        component: ContactComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);