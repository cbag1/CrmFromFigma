import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  logo = 'assets/images/Logo.png';
  layout_block = 'assets/images/layout_block.png';
  group_chat= 'assets/images/group_chat.png';
  equalizer = 'assets/images/equalizer.png';

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  isActive(route: string): boolean {
    console.log(route);
    return this.router.url === route;
  }

}
