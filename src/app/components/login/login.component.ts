import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials={
    username:'',
    password:''
  }

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.log("Form is submited");
    if((this.credentials.username!='' && this.credentials.password!='') && (this.credentials.username!=null && this.credentials.password!=null)){

      console.log("We have to Submit the form to server ");
      //token Generated
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          //token successful generate
          console.log(response.token);
          alert("token created ")
          this.loginService.loginUser(response.token)
          window.location.href="/dashboard"
        },
        error=>{
          // error in generating token
          console.log(error);
          alert("token not created")
          

        }
        
      )
      

    }else{
      console.log("Fields are Empty");
      
    }
    
  }

}
