import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Releases } from './releases';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  Releases: Releases[]=[];
  search: string | undefined;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private httpClient: HttpClient) { }
  url: string= "./assets/releases.json"
  getReleases(){
    return this.httpClient.get(this.url);
  }

  ngOnInit(){
    this.httpClient.get('/assets/releases.json').subscribe((result: any) => {
      this.Releases = result;
    });
  }
  
  addReleases(releases: Releases): Observable<Releases> {
    return this.httpClient.post<Releases>(this.url, releases, this.httpOptions).pipe(
      tap((newReleases: Releases) => this.log(`added  w/ id=${newReleases.id}`)),
      catchError(this.handleError<Releases>('addReleases'))
    );
  }
  log(arg0: string): void {
    throw new Error('Method not implemented.');
  }
  handleError<T>(arg0: string): (err: any, caught: Observable<Releases>) => import("rxjs").ObservableInput<any> {
    throw new Error('Method not implemented.');
  }
  
}
