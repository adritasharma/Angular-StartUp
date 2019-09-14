import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(url)
  }

  post(url, resource) {
    return this.http.post(url, resource)
  }

  fetch(url, resource) {
    return this.http.post(url, resource)
  }

  update(url, resource) {
    return this.http.put(url, resource)
  }

  delete(url) {
    return this.http.delete(url)
  }
  
}
