import { Output, Input, EventEmitter, Component, OnInit} from '@angular/core';
import { LocationService } from './location.service';
import { Location } from './location';

@Component({
    selector: 'modal-app',
    templateUrl: 'modal.component.html',
    styleUrls: ['modal.component.css'],
    providers: [LocationService]
})
export class ModalComponent implements OnInit {

    @Input() lat: number;
    @Input() lng: number;
    @Output() saveData = new EventEmitter<map>();

    private hints: Location[] = [];
    private locationText: string = '';
    private map: map = {
        mLat: 0,
        mLng: 0,
        cLat: 0,
        cLng: 0
    };

    constructor(private locationService: LocationService) {}

    private removeHints(): void {
        this.hints = [];
        this.locationText = '';
    }

    private getHints(address: string): void {
        if (!address) {
            this.removeHints();
            return;
        }
        this.locationService.getHintsData(address).subscribe(
            data => this.hints = data,
            error => {
                console.error(`ERROR(${error.status}): ${error.statusText}`, error); }
        );
    }

    private pickHint(lat: number, lng: number): void {
        this.setMapData(lat, lng);
        this.removeHints();
    }

    private setMapData(lat: number, lng: number): void {
        this.map.cLat = this.map.mLat = lat;
        this.map.cLng = this.map.mLng = lng;
    }

    private myLatLng(): void {
        this.map = {
            mLat: 0,
            mLng: 0,
            cLat: 0,
            cLng: 0
        };
        navigator.geolocation.getCurrentPosition(
            position => {
                this.map = {
                    mLat: position.coords.latitude,
                    mLng: position.coords.longitude,
                    cLat: position.coords.latitude,
                    cLng: position.coords.longitude
                };
            },
            error => {
                console.error(`ERROR(${error.code}): ${error.message}`);
            }
        );
    }

    private mapClicked($event): void {
        this.map.mLat = $event.coords.lat;
        this.map.mLng = $event.coords.lng;
    }

    private saveLocation(): void {
        this.saveData.emit(this.map);
    }

    ngOnInit(): void {
        if (this.lat == 0 && this.lng == 0) {
            this.myLatLng();
        } else {
            this.setMapData(this.lat, this.lng);
        }
    }

}

interface map {
    mLat: number,
    mLng: number,
    cLat: number,
    cLng: number
}