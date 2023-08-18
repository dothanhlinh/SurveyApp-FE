import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, pipe, throwError } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }

  // lấy địa chỉ api
  private baseURL =""

  //các service tương ứng

  Insert(url:string,model:any):Observable<any>{
    return this.http.post(`${this.baseURL}${url}`,model).pipe();
  }
  // ......
}
