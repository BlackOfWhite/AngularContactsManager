import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs/Rx';
import { ContactComponent, Contact } from '../components/contact.component';
// import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    providers: [UsersService]
})
export class UserComponent { // root of the page / application
    users: User[];
    private username: String;

    constructor(private usersService: UsersService) {
        this.username = this.usersService.getUserName();
        this.usersService.getUsers().subscribe(user => {
            console.log(user);
            
            this.users = Array.from(user);
        });
    };
}

export interface User {
    userId: number,
    firstName: String,
    lastName: String,
    email: String,
    contacts: Contact[];
}
