import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
    selector: 'logout',
    template: '<h1>Loggin out</h1>',
})
export class LogoutComponent {

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService) { console.log("logging out"); this.logout();}

        logout() {
            this.authenticationService.logout()
            this.router.navigate(['/login']);
        }
    ngOnInit() {
        this.authenticationService.logout();
        this.router.navigate(['login']);
    }
}