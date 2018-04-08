import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { EventService } from './shared/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {
    constructor(private eventService: EventService) {
        console.log("RESOLVE CONSTRUCTOR")
    }
    
    
    resolve() {
        console.log("RESOLVE INCOMPLETE")
        return this.eventService.getEvents().map((events) => {return events})
        console.log("RESOLVE COMPLETE")
    }
}