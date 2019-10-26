import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Phone } from '../types/phone.enum';
import { Email } from '../types/email.enum';

@Injectable({
  providedIn: 'root'
})


export class ContactService {
  
  contacts: Contact[] =
  [
    {
      fName: 'Alfred',
      lName: 'Planter',
      phone: '234-345-4567',
      email: 'alfredtheplanter@gmail.com'
    },
    {
      fName: 'Brandon',
      lName: 'Beck',
      phone: '293-482-2342',
      email: 'brandon.beck@yahoo.com'
    },
    {
      fName: 'Daisy',
      lName: 'Harvey',
      phone: '839-283-4583',
      email: 'daisyharvey22@gmail.com'
    },
    {
      fName: 'Harvey',
      lName: 'Wilson',
      phone: '283-472-3891',
      email: 'patrickwilson19@yahoo.com'
    }
  ]
  constructor() { }
};
