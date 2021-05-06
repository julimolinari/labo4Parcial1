import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  public obtenerGit(){
    return this.httpClient.get('https://api.github.com/users/julimolinari');
   }
}
