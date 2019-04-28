import  {Component,Input, Output, EventEmitter, OnInit} from '@angular/core';
import {SearchService} from '../../services/music.service';
import {AudioPlayerService} from '../../services/audio_player.service';

@Component({
    selector:'music_listing',
    templateUrl:'music_list.component.html',
    styleUrls:['music_list.component.css'],
    providers:[SearchService]
})

export class MusicListingComponent implements OnInit{
    @Input('music_list') music_list_data:any = [];
    @Input() meta;
    private iconClicked: boolean;
    public selectedItem: number = 0
    
    constructor(private search:SearchService,
                private audioPlayerService:AudioPlayerService){
    }

    ngOnInit(){
        this.audioPlayerService.getSelectedTrack().subscribe(
            (res) =>{
                if(res.is_defined){
                    this.selectedItem = res.data.trackId;
                }
        })
    }

    listElementClick(data){
        if(!this.iconClicked){
            //notify
            console.log('update observable');
            this.audioPlayerService.selectTrack(data);
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
