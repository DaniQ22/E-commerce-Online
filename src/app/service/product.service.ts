import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, raceWith, throwError } from 'rxjs';
import { product } from '../models/model.product';
import { formProductSave } from '../models/model.formProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:8080/api/product';

  constructor(private http:HttpClient) { }

  getAll():Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/all').pipe(
     catchError(this.HandleError)
      );
  }

  delete(productId: number):Observable<void>{
    return this.http.delete<product>(this.apiUrl + '/delete/' + productId , {responseType: 'text' as 'json'}).pipe(
      catchError(this.HandleError)
    );
  }

  save(product: formProductSave):Observable<product>{
    return this.http.post(this.apiUrl + '/save', product, { responseType: 'text' }).pipe(
      catchError(this.HandleError)
    );
  }

  getProductsByName(name:string):Observable<product[]>{
    return this.http.get<product[]>(this.apiUrl + '/search/' + name).pipe(
      catchError(this.HandleError)
    );
  }

  updateProduct(product: formProductSave):Observable<formProductSave>{
    return this.http.put(this.apiUrl + '/update', product, {responseType: 'text'}).pipe(
      catchError(this.HandleError)
    );
  }


  private HandleError(error:HttpErrorResponse):Observable<any>{
    console.error('Objeto de Error Completo:', error);
    let errorMessage = 'Error al procesar la solicitud';
    if(error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    }else{
      errorMessage = `Error: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
