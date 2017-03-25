import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { UserComponent, User } from '../components/user.component';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class UsersService {

    constructor(private http: Http, private AuthenticationService: AuthenticationService) {
        console.log('UsersService initialized...');
    }

    getUsers(): Observable<User[]> {
        let headers = new Headers({ 'Authorization': this.AuthenticationService.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.get('http://localhost:8080/users/all/', options).map(res => <User[]>res.json());
    }

    getUserName(): String {
        return this.AuthenticationService.username;
    }
}

