import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  url:string = "http://localhost/site-bdourados/admin/"

  constructor() { }

  pegarUrl() {
    return this.url
  }

}
