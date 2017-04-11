import { Component } from '@angular/core';

@Component({
    selector: 'search-app',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})

export class SearchComponent {

    private lat: number = 0;
    private lng: number = 0;
    private showModal: boolean = false;
    private firstVisit: boolean = false;
    
    private showSearchModal(): void {
        this.showModal = true;
        this.firstVisit = true;
    }

    private saveData(map): void {
        this.lat = map.mLat;
        this.lng = map.mLng;
        this.showModal = false;
    }

}