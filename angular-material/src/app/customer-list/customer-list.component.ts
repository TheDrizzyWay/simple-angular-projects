import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
   loading: boolean = true;
   customers: Customer[] = [
    { id:1, name:'Customer 001', job: 'Programmer' },
    { id:2, name: 'Customer 002', job: 'Writer' },
    { id:3, name:'Customer 003', job:'None'}
    ];
   dataSource = new MatTableDataSource<Customer>(this.customers);
   displayedColumns  = ['id', 'name', 'job'];

  constructor() { }

  ngOnInit():void {
    setTimeout(() => this.loading = false, 2000);
  }
}
