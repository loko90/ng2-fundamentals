import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component
    ({
        selector: 'event-thumbnail',
        template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'"> - Early Start</span>
                <span *ngSwitchCase="'10:00 am'"> - Late Start</span>
                <span *ngSwitchDefault> - Normal Start</span>
            </div>
            <div>Price: R{{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineURL">
                Online URL: {{event?.onlineURL}}
            </div>
        </div>
        `, styles: [`
            .bold {font-weight: bold;}
            .green {color: #003300 !important;}
            .thumbnail {min-height: 210px;}
            .pad-left {margin-left: 10px;}
            .well div {color: #bbb}
        `]
    })
export class EventThumbnailComponent {
    @Input() event: any;

    getStartTimeClass() {
    //     // 3 WAYS OF ACHIEVING THE SAME

    //     // 1
    //     // const isEarlyStart = this.event && this.event.time === '8:00 am';
    //     // return {green: isEarlyStart, bold: isEarlyStart};

    //     // 2
    //     // if (this.event && this.event.time === '8:00 am')
    //     //     return 'green bold';
    //     // return '';

    //     // 3
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold'];
        return [];
    }
}