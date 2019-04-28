import  {Component,Input, Output, EventEmitter, OnInit} from '@angular/core';
import {SearchService} from '../../services/music.service';
import {MusicListService} from '../../services/music_list.service';

@Component({
    selector:'music_listing',
    templateUrl:'music_list.component.html',
    styleUrls:['music_list.component.css'],
    providers:[SearchService]
})

export class MusicListingComponent implements OnInit{
    @Input('music_list') music_list_data:any = [];
    @Input() selectedItem: number;
    @Input() meta;
    private iconClicked: boolean;
    
    constructor(private search:SearchService,
                private musicListService:MusicListService){
    }

    ngOnInit(){
        // this.musicListService.getSelectedTrack().subscribe(
        //     (res) =>{
        //         if(res.is_defined){
        //             this.listElementClick(res.data);
        //         }
        // })
    }

    listElementClick(data){
        if(!this.iconClicked){
            //notify
            console.log('update observable');
            this.musicListService.selectTrack(data);
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
