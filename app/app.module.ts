import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavbarComponent } from './nav/navbar.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/shared/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivator } from './events/event-details/event-route-activator.service'
import { EventListResolver} from './events/events-list-resolver.service'

import { RouterModule } from '@angular/router'
import { EventService } from './events/shared/event.service'
import { ToastrService } from './common/toastr.service'
import { appRoutes } from './routes'

@NgModule({
	imports: [
		BrowserModule,
		RouterModule.forRoot(appRoutes)
	],
	declarations: [
		EventsAppComponent,
		EventsListComponent,
		EventThumbnailComponent,
		NavbarComponent,
		EventDetailsComponent,
		CreateEventComponent,
		Error404Component,
	],
	providers: [
		EventService, 
		ToastrService, 
		EventRouteActivator,
		EventListResolver,
		{
			provide: 'canDeactivateCreateEvent',
			useValue: checkDirtyState
		}
	],
	bootstrap: [
		EventsAppComponent,
	]
})
export class AppModule {}

export function checkDirtyState(component: CreateEventComponent){
	if (component.isDirty) {
		return window.confirm('You haven\'t saved this event.  Are you sure you want to cancel?')
	}
	return true
	
}