import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Message } from 'src/app/_models/message';
import { MembersService } from 'src/app/_services/members.service';
import { MessageService } from 'src/app/_services/message.service';

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @Input() messages: Message[];
  @Input() username: string;
  content: string;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    
  }
  sendMessage(form: NgForm) {
    this.content = form.value.content;
    form.resetForm();
    this.messageService.sendMessage(this.username, this.content).subscribe(msg => {
      this.messages.push(msg);
      
    });
  }
  

}
