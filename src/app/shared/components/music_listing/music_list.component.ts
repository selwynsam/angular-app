import  {Component,Input, Output, EventEmitter} from '@angular/core';
import {SearchService} from '../../services/music.service';

@Component({
    selector:'music_listing',
    templateUrl:'music_list.component.html',
    styleUrls:['music_list.component.css'],
    providers:[SearchService]
})

export class MusicListingComponent{
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();
    @Input('music_list') music_list_data : [];
    @Input() selectedItem: number;
    @Input() meta;
    private iconClicked: boolean;
    
    constructor(private search:SearchService){
        console.log('music listing component constructor');
    }

    listElementClick(data){
        if(!this.iconClicked){
            this.notify.emit(data);
        }
        this.iconClicked = false;
    }

    likeUnlike(event,data){
        this.iconClicked = true;
        (event.target.dataset.like == 0) ? event.target.dataset.like = 1 : event.target.dataset.like = 0;
        let like_status = (event.target.dataset.like == 0) ? 'unlike' : 'like';
        this.search.musicListActions(data,like_status).subscribe();
    }

    removeSong(data){
        this.search.musicListActions(data,'remove').subscribe(res => this.music_list_data = res);
    }
}
