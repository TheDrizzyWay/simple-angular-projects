import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSnackBar } from '@angular/material';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, AfterViewInit {
   loading = true;
   customers: Customer[] = [
    { id: 1, name: 'Customer 001', job: 'Programmer' },
    { id: 2, name: 'Customer 002', job: 'Writer' },
    { id: 3, name: 'Customer 003', job: 'None' },
    { id: 4, name: 'Customer 004', job: 'Programmer' },
    { id: 5, name: 'Customer 005', job: 'Programmer' },
    { id: 6, name: 'Customer 006', job: 'Programmer' },
    { id: 7, name: 'Customer 007', job: 'Programmer' },
    { id: 8, name: 'Customer 008', job: 'Programmer' },
    { id: 9, name: 'Customer 009', job: 'Programmer' },
    { id: 10, name: 'Customer 010', job:'Programmer' },
    ];
   dataSource = new MatTableDataSource<Customer>(this.customers);
   displayedColumns  = ['id', 'name', 'job', 'operations'];
   pageSize = 5;

   @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(public snackBar: MatSnackBar) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(): void {
    setTimeout(() => this.loading = false, 2000);
  }

  deleteCustomer(id) {
    this.snackBar.open(`Deleting customer #${id}`);
  }

  editCustomer(id) {
    this.snackBar.open(`Editing customer #${id}`);
  }
}
