import {Component,Input, OnInit} from '@angular/core';
import {MusicListService} from '../../services/music_list.service';

@Component({
    'selector': 'music_info_section',
    'templateUrl': 'music_info.component.html',
    'styleUrls': ['music_info.component.css'],
    'providers': []
})

export class MusicInfoComponent implements OnInit{

    @Input() musicInfo:any = [];

    constructor(private musicListService:MusicListService){}

    ngOnInit(){
        this.musicListService.getSelectedTrack().subscribe((res)=>{
            if(res.is_defined){
                this.musicInfo = res.data;
            }
        });
    }
}