import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-users',
  templateUrl: './add-edit-users.component.html',
  styleUrls: ['./add-edit-users.component.scss']
})
export class AddEditUsersComponent implements OnInit {

  user: any = {};

  constructor() { }

  ngOnInit(): void {
    this.user["first_name"] = "";
    this.user["last_name"] = "";
    this.user["email"] = "";
    this.user["person_id"] = "";  // Revisar
    this.user["password"] = "";
    this.user["password_confirmation"] = "";
    this.user["local_login"] = true;
  }

}
