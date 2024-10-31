import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type DogApiResponse = {
  message: string,
  status: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getDog(): Observable<DogApiResponse> {
    return this.httpClient.get<DogApiResponse>('https://dog.ceo/api/breeds/image/random');
  }
}
