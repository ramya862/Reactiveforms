import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Reactiveforms';
 reactiveForm!: FormGroup;
 onSubmit()
 {
  console.log(this.reactiveForm)
 }
 ngOnInit(): void 
 {
   this.reactiveForm=new FormGroup(
    {
 firstname:new FormControl(null,Validators.required),
 lastname:new FormControl(null,[Validators.required,Validators.maxLength(5)]),
 email:new FormControl(null,[Validators.required,Validators.email]),
 country:new FormControl('London'),
gender:new FormControl('Male'),
 hobbies:new FormControl(null),

    }
   );
  }


}
