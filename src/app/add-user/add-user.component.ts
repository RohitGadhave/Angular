import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  imageFile: File = null;
  model: any = {};

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {

  }

  onFormSubmit() {
    console.warn(this.model);

    if(!this.imageFile){
      console.log("add img")
      return false;
    }
    this.userService.addUser(this.model,this.imageFile).subscribe(
      res=>{
        console.log(JSON.stringify(res));
      },
      err=>{
        console.log(JSON.stringify(err));

      }
    );
  }

  onFileSelected(event) {
    console.warn(event);
    this.imageFile = event.target.files[0];
  }

}
