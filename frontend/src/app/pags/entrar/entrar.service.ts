import { HttpClient } from "@angular/common/http"
import { Injectable } from "@angular/core"

@Injectable({
    providedIn: 'root'
  })
  export class EntrarService {
    constructor(private httpClient: HttpClient) {}
      
      postUsuario(usuario : any) {
        return this.httpClient.post('http://localhost:3001/users', usuario);
      }
      
  }