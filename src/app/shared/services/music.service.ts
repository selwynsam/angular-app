import { Injectable} from "@angular/core";
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
    private music_data = JSON.parse(localStorage.getItem('music_data'));

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
        return of(this.music_data);
    }

    musicListActions(data,action){

        this.music_data = (this.music_data != null) ? this.music_data : this.default_storage_val;
              
        switch(action){
            case 'like': {

                this.music_data['results'] = this.music_data['results'].filter(function(el) { return el.trackId != data.trackId; });
                this.music_data['results'].push(data);
                break;
            }

            case 'unlike':
            case 'remove': {
                this.music_data['results'] = this.music_data['results'].filter(function(el) { return el.trackId != data.trackId; });
                break;
            }
        }

        this.music_data['resultCount'] = this.music_data['results'].length;
        localStorage.setItem("music_data", JSON.stringify(this.music_data));
  
        return of(this.music_data);
    }
}