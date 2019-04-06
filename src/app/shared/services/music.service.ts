import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class SearchService{
    //.subscribe(res => console.log(res.json()))
    public apiRoot:string = 'https://itunes.apple.com/search';

    constructor(private http: HttpClient){}
    
    search(term:string){
        let url = `${this.apiRoot}`;
        let headers = new HttpHeaders();
        let params = new HttpParams();
        params = params.append('term', term);
        params = params.append('media', 'music');
        params = params.append('limit', '50');
        return this.http.get(url,{headers,params});
    }
}