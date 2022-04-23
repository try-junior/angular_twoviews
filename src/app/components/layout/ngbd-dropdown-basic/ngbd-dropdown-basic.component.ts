import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ngbd-dropdown-basic',
  templateUrl: './ngbd-dropdown-basic.component.html',
  styleUrls: ['./ngbd-dropdown-basic.component.css']
})
export class NgbdDropdownBasicComponent implements OnInit {

  constructor() { }

  websiteList: any = ['ItSolutionStuff.com', 'HDTuto.com', 'Nicesnippets.com']



  form = new FormGroup({

    website: new FormControl('', Validators.required)

  });



  get f(){

    return this.form.controls;

  }



  submit(){

    console.log(this.form.value);

  }

  changeWebsite() {

   // console.log(e.target.value);

  }

  ngOnInit(): void {
  }

}
