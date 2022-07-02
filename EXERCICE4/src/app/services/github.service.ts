import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Contributor } from '../pages/exercice/interfaces/contributors.interface';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  url = "https://api.github.com/repos/"

  constructor(private http: HttpClient) { }

  getData(owner:string, repo:string): Observable<Contributor[]> {

    return this.http.get<Contributor[]>(`${this.url}${owner}/${repo}/contributors`)
  }

}
