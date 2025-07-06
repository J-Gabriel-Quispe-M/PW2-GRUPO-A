import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent implements OnInit {
  @Input() nameUser: any;

  ngOnInit() {}
}
