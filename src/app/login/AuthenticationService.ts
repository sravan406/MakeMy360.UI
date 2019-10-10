import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable,throwError } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, } from '@angular/common/http';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: HttpClient,private router: Router) {
        
        // set token if saved in local storage
       
    }

    public baseApiUrl=  environment.tokenUrl;

    //public api= 'http://localhost:60550/';
    
    //var deferred = $q.defer();
    
    //$http.post(serviceBase + 'token', data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }).then(function onSuccess(response) {



        login(username: string, password: string){
            
            var data = 'grant_type=password&username=' + username+ '&password=' + password;
            var headers = new Headers();
            headers.append('Content-Type', 'application/X-www-form-urlencoded'); 
            const httpOptions = {
                headers: new HttpHeaders({
            
                  'ContentType': 'application/X-www-form-urlencoded'
                    
                })
              };
            return this.http.post(this.getApiUrl('OAuth/token'), data,httpOptions).pipe(
                catchError((e) => {
                    return this.handleError(e);
                })
            );
        }


        private getApiUrl(url) {
            return this.baseApiUrl + url;
        }

        private handleError(errorResponse: HttpErrorResponse) {
            // in a real world app, we may send the server to some remote logging infrastructure
            // instead of just logging it to the console
            let errorStatus = '404'
            console.log("error occured.", errorResponse);
    
            if (errorResponse instanceof HttpErrorResponse) {
                errorStatus = errorResponse.status > 0 ? errorResponse.status.toLocaleString() : '404';
            }
            if (errorStatus !== '400') {
                //this._globalEventsManager.error(errorStatus);
    
                // Redirect the user after login
                return this.router.navigate(['/error']);
            }
            return throwError(errorResponse);
    
        }
    

    // login_old(username: string, password: string,organizationId:string): Observable<boolean> {
    //     var data = 'grant_type=password&username=' + username+ '&password=' + password+'&client_id='+organizationId;
    //     var headers = new Headers();
    //     headers.append('Content-Type', 'application/X-www-form-urlencoded'); 
    //     return this.http.post(this.api 
    //         + 'token', data, { headers:  headers  }
    //     //    +'authenticate', JSON.stringify({ username: username, password: password })
    //     ).subscribe((response: Response) => {
    //             // login successful if there's a jwt token in the response
    //            let token = response.json() && response.json().access_token;
    //             if (token) {
    //                 // set token property
    //                 this.token = token;
 
    //                 // store username and jwt token in local storage to keep user logged in between page refreshes
    //                 //localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

    //                 localStorage.setItem('currentUser',
                   
    //                 JSON.stringify({
    //                      token: token,
    //                      userName: response.json() && response.json().userName,
    //                      name: response.json() && response.json().name,
    //                       userId: response.json() && response.json().userId,
    //                       emailId: response.json() && response.json().emailId,
    //                     profilePhoto: response.json() && response.json().profilePhoto,
    //                     userType:response.json() && response.json().userType,
    //                      refreshToken: "",
    //                      useRefreshTokens: false
    //                     })
    //                  );
    //                  localStorage.setItem('token',
    //                    token
    //                    );
   
    //                 // return true to indicate successful login
    //                 return true;
    //             } else {
    //                 // return false to indicate failed login
    //                 return false;
    //             }
    //         })
    //         .catch(this.handleError);
    // }
   
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userRoles');
    }
}