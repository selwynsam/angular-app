import { Injectable } from "@angular/core";
//import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable()
export class SearchService{
    //.subscribe(res => console.log(res.json()))
    apiRoot:string = 'https://itunes.apple.com/search';

    constructor(){}
    
    search(){
        // let url = `${this.apiRoot}`;
        // console.log(url);
        // let headers = new HttpHeaders();
        // let params = new HttpParams();
        // params = params.append('term', 'sia');
        // params = params.append('media', 'music');
        // params = params.append('limit', '50');
        // return this.http.get(url,{headers,params}).subscribe(res => console.log(res);
        console.log('here');
    }
}