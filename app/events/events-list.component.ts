import { Component } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'

@Component({
    // template: `
    // <div>
    // <h1>Upcoming Angular 2 Events</h1>
    //     <hr/>
    //     <div *ngFor="let event of events" class="col-md-5">
    //         <event-thumbnail [event]="event"></event-thumbnail>
    //     </div>
    // </div>`
    templateUrl: '/app/events/events-list.component.html'
})
export class EventsListComponent {
    events: any[]
    constructor(private _eventService: EventService, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.events = this._eventService.getEvents()
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}