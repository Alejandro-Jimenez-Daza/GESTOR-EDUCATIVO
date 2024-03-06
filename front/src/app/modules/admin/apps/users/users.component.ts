import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  @ViewChild('paginator') paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'last_name', 'cedula'];
  dataSource = new MatTableDataSource();

  pageSizeOptions: number[] = [10];
  totalData = 0;
  pageSize = 10;
  currentPage = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
