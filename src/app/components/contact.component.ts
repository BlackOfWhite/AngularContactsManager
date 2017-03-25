import { Component } from '@angular/core';
import { ContactsService } from '../services/contacts.service';
import { Observable } from 'rxjs/Rx';
import { Http, Response, Headers, RequestOptions } from "@angular/http";

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    providers: [ContactsService]
})
export class ContactComponent { // root of the page / application
    contacts: Contact[];

    constructor(private contactsService: ContactsService) {
        this.contactsService.fetchByUser().subscribe(c => {
            this.contacts = Array.from(c);
        });
    };

    // fetchAllContacts() {
    //     this.contactsService.fetchAll().subscribe(c => {
    //         console.log(c+"asdasdasdasd");
    //         this.contacts = Array.from(c);
    //     });
    // }

    fetchUserContacts() {
        this.contactsService.fetchByUser().subscribe(c => {
            console.log(c+"asdasdasdasd");
            this.contacts = Array.from(c);
        });
    }

    deleteContact(id) {
        if (confirm("Are you sure you want to delete " + id + "?")) {
            this.contactsService.deleteById(id).subscribe(
                data => {
                    // refresh the list
                    this. fetchUserContacts();
                    return true;
                },
                error => {
                    console.error("Error deleting contact!");
                    return Observable.throw(error);
                }
            );
        }
    }

    updateContact(contact) {
        this.contactsService.updateContact(contact).subscribe(
            data => {
                this. fetchUserContacts();
                return true;
            },
            error => {
                console.error("Error updating contact!");
                return Observable.throw(error);
            }
        );
    }

    addContact(contact) {
        this.contactsService.addContact(contact).subscribe(
            data => {
                this. fetchUserContacts();
                return true;
            },
            error => {
                console.error("Error adding contact!");
                return Observable.throw(error);
            }
        );
    }


}

export interface Contact {
    cId: number,
    firstName: String,
    lastName: String,
    companyName: String,
    email: String,
    phone: String
}