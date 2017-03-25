import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { ContactComponent, Contact } from '../components/contact.component';
import { AuthenticationService } from '../services/authentication.service';



@Injectable()
export class ContactsService {
    url: string;
    constructor(private http: Http, private authenticationService: AuthenticationService) {
        this.url = 'http://localhost:8080/users/';
        console.log('ContactsService initialized...');
    }

    // fetchAll(): Observable<Contact[]> {
    //     console.log("====" + this.authenticationService.token);
    //     let headers = new Headers({ 'Authorization': this.authenticationService.token });
    //     headers.append('Content-Type', 'application/json');
    //     let options = new RequestOptions({ headers: headers });
    //     return this.http.get(this.url, options).share().map(res => <Contact[]>res.json());
    // }

     fetchByUser(): Observable<Contact[]> {
        console.log("====" + this.authenticationService.token);
        let userId = this.authenticationService.userId;
        console.log(userId);
        let headers = new Headers({ 'Authorization': this.authenticationService.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.url + userId + "/contacts/", options).share().map(res => <Contact[]>res.json());
    }


    deleteById(val: number) {
        console.log("deleteById " + val);
        console.log("====" + this.authenticationService.token);
        let headers = new Headers({ 'Authorization': this.authenticationService.token });
        let options = new RequestOptions({ headers: headers });
        return this.http
            .delete("http://localhost:8080/contacts/" + val, options);
    }

    addContact(contact) {
        let headers = new Headers({ 'Authorization': this.authenticationService.token });
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(contact);
        return this.http.post(this.url, body, headers).map((res: Response) => res.json());
    }

    updateContact(contact) {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let body = JSON.stringify(contact);
        return this.http.put(this.url, body, headers).map((res: Response) => res.json());
    }
}

