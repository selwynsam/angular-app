import { Injectable } from '@angular/core';
@Injectable()
export class HomeService{
    getData(){
        return [{
            'id': 1,
            'title': 'Never give up',
            'artist': 'Sia',
            'duration':'03:01'
        },
        {
            'id': 2,
            'title': 'Move on',
            'artist': 'Mike Posner',
            'duration':'04:01'
        },
        {
            'id': 1,
            'title': 'Grenade',
            'artist': 'Bruno Mars',
            'duration':'03:45'
        }]
    }
}