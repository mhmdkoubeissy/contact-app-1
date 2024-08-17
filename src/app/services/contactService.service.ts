import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contactModel';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contact1 : ContactModel = {
    id : 1 ,
    name : 'name1' ,
    email : 'email1@gmail.com',
    phone : '76601510'
  }

  contact2 : ContactModel = {
    id : 2 ,
    name : 'name2' ,
    email : 'email2@gmail.com',
    phone : '76601510'
  }

  contact3 : ContactModel = {
    id : 3 ,
    name : 'name3' ,
    email : 'email3@gmail.com',
    phone : '76601510'
  }

  contacts : ContactModel[] = [this.contact1 , this.contact2 , this.contact3] ;

  constructor() { }

  addContact(contact : ContactModel){
    this.contacts.push(contact);
  }

  getContacts() : ContactModel[] {
    return this.contacts;
  }

  deleteContact(id : number){
    const index = this.contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
    }
  }

  updateContact(updatedContact : ContactModel){
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  searchContact(name: string): ContactModel | undefined {
    return this.contacts.find(contact => contact.name === name);
  }

}
