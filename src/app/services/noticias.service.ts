import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { TopHeadLines } from '../interfaces/interfaces';

const apiKey=environment.apiKey;
const apiUrl=environment.apiUrl;

const headers= new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  numberPage: number = 0;
  
  constructor(private readonly http: HttpClient) {
   }
  
   private createGet<T>(query: string){
     query= apiUrl + query;
     return this.http.get<T>(query,{ headers });
   }

  getTopHeadLines(){
    this.numberPage++;
    return this.createGet<TopHeadLines>(`/top-headlines?country=us&page=${this.numberPage}`);
  }
  getTopHeadLinesCategoria(categoria:string){
    this.numberPage++;
    return this.createGet<TopHeadLines>(`/top-headlines?country=us&category=${categoria}&page=${this.numberPage}`);
    
  }
}
