import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter<boolean>();
  constructor(private accountService: AccountService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  register(form: NgForm) {
    this.accountService.register(form.value).subscribe(res => {
      this.cancel();
    }, err => {
      console.log(err);
      this.toastr.error(err.error);
    });
  }
  cancel() {
    this.cancelRegister.emit(false);
  }
  
}
