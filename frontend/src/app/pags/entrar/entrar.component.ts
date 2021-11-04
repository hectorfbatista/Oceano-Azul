import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrarService } from './entrar.service';

export interface User {
  name?: string;
  lastName?: string;
  age?: number;
}

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.scss']
})
export class EntrarComponent {

  usuario: User = {
    name: ""
  };

  constructor(
    private service:EntrarService,
    private router:Router
  ) { }

  entrar() {
    this.usuario.age = Number(this.usuario.age);
    this.service.postUsuario(this.usuario)
    .subscribe((res: any) => {
      window.localStorage.setItem('age', res.age);
      if (res.age < 11 ) {
        this.router.navigateByUrl('/area-kids');
      } else if (res.age < 18) {
        this.router.navigateByUrl('/area-video');
      }
      else { 
        this.router.navigateByUrl('/sobre');
      }
    });
  }

}

