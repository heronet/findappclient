import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();
  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
  }
  register(form: NgForm) {
    this.accountService.register(form.value).subscribe(res => {
      this.cancel();
    }, err => {
      console.log(err);
      
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
  
}
