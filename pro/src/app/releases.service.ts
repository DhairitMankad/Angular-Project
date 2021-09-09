import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Releases } from './releases';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  constructor(private http: HttpClient) { }
  url: string= "./assets/releases.json"
  getReleases(){
    return this.http.get(this.url);
  }
}
