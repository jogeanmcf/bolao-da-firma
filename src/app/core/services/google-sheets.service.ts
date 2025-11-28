import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GoogleSheetsService {

    private apiUrl = 'https://script.google.com/macros/s/AKfycbznZUVKdcEqK8nVwuaBqIviFHrZmGJAWMIhySWdxX564Axa-9TiElXs_nZqysQN8CU/exec';

    constructor(private http: HttpClient) { }

    submitEntry(data: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' });
        return this.http.post(this.apiUrl, JSON.stringify(data), { headers });
    }
}
