import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {
  private url = 'https://random.justyy.workers.dev/api/random';

  constructor(private httpClient: HttpClient) { }

  public getRandomString(): Observable<string>{
    return this.httpClient.get<string>(this.url);
  }
}
