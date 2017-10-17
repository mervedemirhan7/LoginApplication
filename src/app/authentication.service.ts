
import { Router } from '@angular/router';
import { Injectable } from "@angular/core";
import { Http, RequestOptions, RequestOptionsArgs,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class AuthenticationService {

  constructor(private http:Http){

  }

  login(context:FormContext):Promise<any>{

    let findUser:FormContext[];
    
    return this.http.get('../assets/data.json') 

    .map((resp:Response)=><FormContext[]>resp.json())
    .map(x=>{
      localStorage.setItem("login","ok");
      return x.filter(x=>x.username===context.username&&x.password===context.password)
    })
      
    
  .toPromise()
  .catch(err=>{
      return Observable.throw(err);
    });
  }

  isLogin():boolean{

    let status=localStorage.getItem("login");

    return status==="ok"? true : false;
  }
}

export interface FormContext {
  username: string;
  password: string;
}
