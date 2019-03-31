import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
//import {Routes, RouterModule} from '@angular/router';
import {Router} from '@angular/router';
//import { ShoppingCartService } from "../../services/shopping-cart.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private router: Router
  ) {
  }

  ngOnInit() {
  }

  checkIfUserValid() {

    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (xhttp.readyState === 4 && xhttp.status === 200) {
        if (xhttp.responseText === 'yes') {
          this.router.navigate(['main']);
        } else {
          alert('Wrong Password/Wrong UserName');
        }
      }
    };
    xhttp.open('POST', 'http://localhost:1337/login', true);

    xhttp.send(this.password + '&' + this.userName);

  }

  adduser() {
    const addhttp = new XMLHttpRequest();
    addhttp.onreadystatechange = () => {
      if (addhttp.readyState === 4 && addhttp.status === 200) {
        if (addhttp.responseText === 'yes') {
          alert('Success!');
        } else {
          alert('UserName already exist!');
        }
      }
    };
    addhttp.open('POST', 'http://localhost:1337/signup', true);
    addhttp.send(this.password + '&' + this.userName);

  }
}

