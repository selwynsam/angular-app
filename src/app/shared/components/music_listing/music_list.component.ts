import  {Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector:'music_listing',
    templateUrl:'music_list.component.html',
    styleUrls:['music_list.component.css']
})

export class MusicListingComponent{
    @Output() notify:EventEmitter<string> = new EventEmitter<string>();
    @Input('music_list') music_list_data : [];
    constructor(){
        console.log('music listing component constructor');
    }

    listElementClick(data){
        this.notify.emit(data);
    }
}
