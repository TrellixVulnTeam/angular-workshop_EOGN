import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Joke } from './models/joke.model';

@Injectable()
export class RandomService {
  private url = 'https://yomomma-api.herokuapp.com/jokes';
  constructor(private httpClient: HttpClient) { }

  public getString(): Observable<Joke>{
    return this.httpClient.get<Joke>(this.url);
  }

  public postString(): void{
    this.httpClient.post<string>(this.url, 'dsadassad');
  }
}
