import { Observable } from 'rxjs';
import { HttpResponse, HttpHeaders, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { EncryptedService } from './encrypted.service';

export class BaseService {
  public http: HttpClient;
  public documentName: string;
  public baseUrl: string = '';
  public Encrypt: EncryptedService = new EncryptedService();
  
  constructor(
    http: HttpClient,
    documentName: string
  ) {
    this.http = http;
    this.documentName = documentName;
    this.baseUrl = `http://127.0.0.1:3000/${documentName}`;
  }

  list() {
    return this.request('get', this.baseUrl);
  }
  get(_id: string) {
    return this.request('get', `${this.baseUrl}/${_id}`);
  }
  obtain(_id: string, _object: any) {
    return this.request('post', `${this.baseUrl}/${_id}`, _object);
  }
  save(_id: string, _object: any, _headers?: any) {
    return this.request('post', `${this.baseUrl}/${_id}`, _object, _headers);
  }
  update(_id: string, _object: any) {
    return this.request('put', `${this.baseUrl}/${_id}`, _object);
  }
  delete(_id: string) {
    return this.request('delete', `${this.baseUrl}/${_id}`);
  }
  filter(params: any) {
    return this.request('post', `${this.baseUrl}/filter`, params);
  }
  size(params: any) {
    return this.request('post', `${this.baseUrl}/size`, params);
  }

  public request(method: string, url: string, _object?: any, _headers?: any) {
    let requestTrigger: any;
    const request: Observable<any> = new Observable<any>(observable => {
      requestTrigger = observable;
    });
    let httpRequest;
    if (_object) {
      httpRequest = this.http[method](url, _object);
    } else {
      httpRequest = this.http[method](url);
    }
    httpRequest.subscribe(
      (response: any) => {
        requestTrigger.next(<any>response);
        requestTrigger.complete();
      },
      err => {
        let op: any;
        op.state = err.status;
        requestTrigger.next(<any>op);
        requestTrigger.complete();
      }
    );
    return request;
  }
}
