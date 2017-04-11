import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Location } from './location';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class LocationService {

    constructor(private http: Http) {}

    getHintsData(address): Observable<Location[]> {
        let url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&sensor=false&language=ru`;
        return this.http.get(url)
            .map((resp:Response) => {
                let hintList = resp.json().results;
                let status: string = resp.json().status;
                let hints: Location[] = [];
                for(let index in hintList){
                    let hint = hintList[index];
                    if (status === 'OK') {
                        // console.log(hint);
                        let location = hint.geometry.location;
                        hints.push({address: hint.formatted_address, lat: location.lat, lng: location.lng});
                    }
                }
                return hints;
            })
            .catch((error: any) => {
                return Observable.throw(error);
            });
    }
}