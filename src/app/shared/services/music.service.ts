import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { of } from 'rxjs';

@Injectable()
export class SearchService{
    public base_url:string = "https://selwynsam.github.io/angular-app/"; 
    public apiRoot:string = 'https://itunes.apple.com/search';
    public default_storage_val = {
        'results': [],
        'resultCount': 0
    }

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

    getLatestMusic(){
        return this.http.get(this.base_url+'assets/latestMusic.json'); 
    }

    getFavouriteMusic(){
        let music_data = JSON.parse(localStorage.getItem('music_data'));
        return of(music_data);
    }

    musicListActions(data,action){

        let music_data = JSON.parse(localStorage.getItem('music_data'));

        music_data = (music_data != null) ? music_data : this.default_storage_val;
              
        switch(action){
            case 'like': {
                music_data['results'].push(data);
                break;
            }

            case 'unlike':
            case 'remove': {
                music_data['results'] = music_data['results'].filter(function(el) { return el.trackId != data.trackId; });
                break;
            }
        }

        music_data['resultCount'] = music_data['results'].length;
        localStorage.setItem("music_data", JSON.stringify(music_data));
        return of(music_data);
    }
}