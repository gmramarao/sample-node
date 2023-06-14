import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }
  url : string | undefined;
  ngOnInit() {
    console.log(this.router.url);
    this.url = this.router.url;
  }
  findUrl(rout: any){
    if(rout === this.url){
      return true;
    } else {
      return false;
    }
  }
  
}
