import { Component } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'

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
    constructor(private _eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this._eventService.getEvents().subscribe(events => {
        //     this.events = events
        // })
        console.log("OnInit Events-List.component")
        this.events = this.route.snapshot.data['events']
    }

    handleThumbnailClick(eventName) {
        this.toastr.success(eventName)
    }
}