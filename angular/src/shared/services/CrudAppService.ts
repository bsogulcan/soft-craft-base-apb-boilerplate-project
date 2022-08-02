import {ResponceType, ResponceTypeWrap} from './ResponseType';
import {API_BASE_URL} from '../service-proxies/service-proxies';
import {HttpClient} from '@angular/common/http';
import {Inject} from '@angular/core';
import {Observable} from 'rxjs';

export class CrudAppService<FullOutputType, CreateInputType, UpdateInputType, GetInputType, DeleteInputType> {
    endPoint: string;
    baseUrl: string;
    http: HttpClient;

    constructor(endPoint: string, @Inject(HttpClient) http: HttpClient, @Inject(API_BASE_URL) baseUrl?: string) {
        this.endPoint = endPoint;
        this.http = http;
        this.baseUrl = baseUrl ? baseUrl : '';
    }

    create(data: CreateInputType): Observable<ResponceType<FullOutputType>> {
        return this.http.post<ResponceType<FullOutputType>>(this.baseUrl + '/api/services/app/' + this.endPoint + '/Create', data);
    }

    update(data: UpdateInputType): Observable<ResponceType<FullOutputType>> {
        return this.http.put<ResponceType<FullOutputType>>(this.baseUrl + '/api/services/app/' + this.endPoint + '/Update', data);
    }

    get(id: any): Observable<ResponceType<FullOutputType>> {
        return this.http.get<ResponceType<FullOutputType>>(this.baseUrl + '/api/services/app/' + this.endPoint + '/Get?Id=' + id);
    }

    getList(data?: GetInputType): Observable<ResponceTypeWrap<Array<FullOutputType>>> {
        return this.http.get<ResponceTypeWrap<Array<FullOutputType>>>(this.baseUrl + '/api/services/app/' + this.endPoint + '/GetAll');
    }

    delete(id: any) {
        return this.http.delete(this.baseUrl + '/api/services/app/' + this.endPoint + '/Delete?Id=' + id);
    }
}
