import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
baseUrl  = 'https://localhost:7125/api/Account/';
private http = inject(HttpClient);

login(values: any) {
  let params = new HttpParams();
  params = params.append('useCookies', true);
  
  return this.http.post(this.baseUrl + 'login', values , { params , withCredentials: true });
}

getUserInfo() {
  return this.http.get(this.baseUrl + 'userinfo', { withCredentials: true });
}

logout(){
  return this.http.post(this.baseUrl + 'logout',{} , { withCredentials: true })
}

getAuthState() {
  return this.http.get<{isAuthenticated: boolean}>(this.baseUrl + 'auth-status');
}
}   
