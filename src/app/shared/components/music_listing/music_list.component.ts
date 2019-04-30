import  {Component,Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {SearchService} from '../../services/music.service';
import {AudioPlayerService} from '../../services/audio_player.service';
import {Subscription} from 'rxjs';

@Component({
    selector:'music_listing',
    templateUrl:'music_list.component.html',
    styleUrls:['music_list.component.css'],
    providers:[SearchService]
})

export class MusicListingComponent implements OnInit,OnDestroy{
    @Input('music_list') music_list_data:any = [];
    @Input() meta;
    private iconClicked: boolean;
    private getSelectedTrackSub: Subscription;
    public selectedItem: number = 0
    
    constructor(private search:SearchService,
                private audioPlayerService:AudioPlayerService){
    }

    ngOnInit(){
        this.getSelectedTrackSub = this.audioPlayerService.getSelectedTrack().subscribe(
            (res) =>{
                if(res.is_defined){
                    this.selectedItem = res.data.trackId;
                }
        })
    }

    listElementClick(data){
        if(!this.iconClicked){
            //notify
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

    ngOnDestroy(){
        this.getSelectedTrackSub.unsubscribe();
    }
}
