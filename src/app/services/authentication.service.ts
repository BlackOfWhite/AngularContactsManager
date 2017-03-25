import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { UserComponent } from '../components/user.component';

@Injectable()
export class AuthenticationService {
    public token: string;
    public username: string;
    public userId: String;
    url: string;

    constructor(private http: Http) {
        this.url = 'http://localhost:8080/login';
        var currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
        console.log(currentUser);
        if (currentUser) {
            this.username = currentUser.username;
            this.token = currentUser.token;
            this.userId = currentUser.userId;
        }
        console.log('AuthenticationService initialized...');
    }

    login(username: string, password: string): Observable<boolean> {
        return this.http.post(this.url, JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                console.log(response.headers.get("Authorization"));
                var token = response.headers.get("Authorization");
                if (token) {
                    this.username = username;
                    this.token = token;
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                    return true;
                } else {
                    return false;
                }
            });
    }

    logout(): void {
        this.token = null;
        this.username = "";
        this.userId = "";
        localStorage.removeItem('currentUser');
    }

    getToken(): String {
        return (localStorage.getItem('currentUser'));
    }

    setUserId(): Observable<userCred> {
        let headers = new Headers({ 'Authorization': this.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.get("http://localhost:8080/users/id", options).map(res => <userCred>res.json());
    }
}

export interface userCred{
    id: String;
}
