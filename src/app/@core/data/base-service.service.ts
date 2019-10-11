import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { map, concatAll, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FileToUpload, ProjectDetails } from '../models/admin-models';
// import { GlobalEventsManager } from '../../data/global-events-manager';

const httpOptions = {
    headers: new HttpHeaders({

      'ContentType': 'application/json;utf-8',
      'Authorization': 'Bearer ' + localStorage.getItem('token')
        
    })
  };
@Injectable()
export class baseService {

    private baseApiUrl: string;

    constructor(
        private http: HttpClient,
        private router: Router,
        //private _globalEventsManager: GlobalEventsManager
        ) {
        this.baseApiUrl = environment.apiUrl;
    }

    /**
     * Post
     * @param url
     * @param body
     */
    public postFile(url: string, body: any) {
        const HttpUploadOptions = {
            headers: new HttpHeaders({ "Content-Type": "multipart/form-data" }
          
            )
          }
        return this.http.post(url, body,HttpUploadOptions).subscribe(
           data=>{
               alert('ok');
           },
           error=>{
               console.log("hi");
             console.log(JSON.stringify(error.json()));
           }
        );
    }


    // public post(url: string, body: any) {
    //     return this.http.post(this.getApiUrl(url), body).subscribe(
    //        data=>{
    //            alert('ok');
    //        },
    //        error=>{
    //            console.log("hi");
    //          console.log(JSON.stringify(error.json()));
    //        }
    //     );
    // }
    public post(url: string, body: any) : Observable<any> {

        const httpOptionsforpostcall = {
            headers: new HttpHeaders({
        
              'ContentType': 'application/json;utf-8',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
                
            })
          };
        return this.http.post(this.getApiUrl(url), body,httpOptionsforpostcall).pipe(
            catchError((e) => {
                return this.handleError(e);
            })
        );
    }

    public uploadFile(url:string,theFile: ProjectDetails)  {
        const HttpUploadOptions = {
                     headers: new HttpHeaders({ "Content-Type": "application/json;utf-8" ,
                     'Authorization': 'Bearer ' + localStorage.getItem('token')})
                 }
        return this.http.post<ProjectDetails>(
            this.getApiUrl(url), theFile,HttpUploadOptions).pipe(
            catchError((e) => {
                return this.handleError(e);
            })
        );
      } 

   
    //   public post(url: string, body: any) {
    //     return this.http.put(this.getApiUrl(url), body)
    //         .pipe(
    //             catchError((e) => this.handleError(e))
    //         );
    // }
    /**
     * Post
     * @param url
     * @param body
     */
    public put(url: string, body: any) {
        return this.http.put(this.getApiUrl(url), body)
            .pipe(
                catchError((e) => this.handleError(e))
            );
    }

    /**
     * patch
     * @param url
     * @param options
     */
    public patch<T>(url: string, body: any) {
        return this.http.patch<T>(this.getApiUrl(url), body);
    }
    /**
     * delete
     * @param url
     * @param options
     */
    public delete(url: string, options?: HttpParams) {
        return this.http.delete(this.getApiUrl(url)).pipe(
            catchError((e) => this.handleError(e))
        );
    }
    /**
     * get
     * @param url
     * @param options
     */
    public get(url: string, options?: HttpParams): Observable<any> {
        const httpOptionsforgetcall = {
            headers: new HttpHeaders({
        
              'ContentType': 'application/json;utf-8',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
                
            })
          };
        return this.http.get(this.getApiUrl(url),httpOptionsforgetcall).pipe(  
            catchError((e) => {
                return this.handleError(e);
            })          
        );
    }

  
 

 


    /**
     * getFile
     * @param url
     * @param options
     */
    public getFile(url: string, options?: HttpParams) {
        console.log('Bearer ' + localStorage.getItem('token'));
        const httpOptions1 = {
            headers: new HttpHeaders({
        
              'ContentType': 'application/json;utf-8',
              'Authorization': 'Bearer ' + localStorage.getItem('token')
                
            })
          };
        window.open(this.getApiUrl(url));
    }

    /**
     * handleError
     * @param response
     */
    private handleError(errorResponse: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        if (errorResponse.status == 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('currentUser');
           return this.router.navigate(['/login']);      
        }
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


    /**
     * getApiUrl
     * @param url
     */
    private getApiUrl(url) {
        return this.baseApiUrl + url;
    }


}
