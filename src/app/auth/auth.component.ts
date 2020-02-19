import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  constructor(private auth :AuthService){}
  isLoginMode=true;
  onSwitchMode(){
    this.isLoginMode=!this.isLoginMode;
  }
  onLogin(user:NgForm)
  {
    if(!user.valid)
    {
      return;   
    }
    console.log(user.value)
    const email=user.value.email;
    const password=user.value.password;
    user.reset()
    
  }
}
