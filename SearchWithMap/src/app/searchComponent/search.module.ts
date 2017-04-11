import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { SearchComponent }   from './search.component';
import { ModalComponent }   from '../modalComponent/modal.component';
import { routing } from './search.routing';

@NgModule({
    imports: [
        routing,
        FormsModule,
        HttpModule,
        CommonModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyCu32jBaWOlG52X5CN4OsvwwHpIFO0gUIE'
        })
    ],
    declarations: [
        SearchComponent,
        ModalComponent
    ],
})

export class SearchModule {}