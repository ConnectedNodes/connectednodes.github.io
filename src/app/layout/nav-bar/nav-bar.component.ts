import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  clickHome(){
    this.router.navigate(["connectednodes/home"]);
  }
  clickGame(){
    this.router.navigate(["connectednodes/home"]);
    document.getElementById("gamesContainer").scrollIntoView();
  }
  clickAboutUs(){
    this.router.navigate(["connectednodes/home"]);
    document.getElementById("aboutUsContainer").scrollIntoView();
    

}
  clickContactUs(){
    this.router.navigate(["connectednodes/home"]);
    document.getElementById("contactUsContainer").scrollIntoView();
  }

}
