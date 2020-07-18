import { Component } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReactiveFormWithValidation';
  status;
  data;

  constructor(private fb:FormBuilder){}

  profileForm=this.fb.group({
    fullname: ['',[Validators.required,Validators.minLength(5),Validators.maxLength(35)]],
    email: ['',[Validators.required,Validators.email]],
    mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
  });

  Submitdata(profileForm){
    // console.log(profileForm.value);
    this.status=true;
    this.data = profileForm.value;
    // console.log(profileForm.controls);
    // console.log(profileForm.controls.fullname.value);
    // console.log(profileForm.controls.email.value);
    // console.log(profileForm.controls.mobile.value);
    profileForm.reset();
  }


}
