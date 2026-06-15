import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GoogleSheetsService {

    private apiUrl = 'https://script.google.com/macros/s/AKfycbyVw_V2zuZ0QXgUioIC3tymotvPClxbr3XZ2dzmPryxVjoRuC8TpY2mFtelZM5MAtxl/exec';

    constructor(private http: HttpClient) { }

    submitEntry(data: any): Observable<any> {
        const headers = new HttpHeaders({ 'Content-Type': 'text/plain; charset=utf-8' });
        return this.http.post(this.apiUrl, JSON.stringify(data), { headers });
    }
}
