import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserRoleService {
  private baseUrl = 'http://localhost:4444/users';

  constructor(
    private http: HttpClient,
  ) {}

  getUserRole(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/userrole/`+ id);
  }
}
