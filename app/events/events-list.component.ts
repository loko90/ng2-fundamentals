import { Component } from '@angular/core'
import { EventService } from './shared/event.service'

@Component({
    selector: 'events-list',
    // template: 'app/events/events-list.component.html'
    template: `
    <div>
        <h1>Upcoming Angular 2 Events</h1>
        <hr/>
        <div *ngFor="let event of events" class="col-md-5">
            <event-thumbnail [event]="event"></event-thumbnail>
        </div>
    </div>
    `
})
export class EventsListComponent {
  events: any[]
  constructor(private _eventService:EventService) {
  }
  
  ngOnInit() {
    this.events = this._eventService.getEvents()    
  }
}