import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    // 'root' this would be available in hte entire application
    // 'platform' to make it available in multiple angular apps in the same page
    // 'any' for anything
    providedIn: 'root'
})
export class EventService {
    // allow to pass messages from the observable object to the subscriber objects
    private subject = new Subject();

    // The object that is going to emit the event calls the subject next method
    // the next passes in the event object that has the name and payload
    emit(eventName: string, payload: any) {
        // in the emit have the subscriber (subject) 
        // with the next (object for the subscribers to work with)
        // that object will get an object with the event name and payload properties
        this.subject.next({eventName, payload});
    }

    // the object that is going to listen for that event is going to use
    // the subject asObservable method because that gives access to the subscribe method
    // So an object that is going to subscribe will receive the event object
    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj: any) => {
            // Check if the event name is the same as what was provided to the listen method
            if (eventName === nextObj.eventName) {
                // If yes do the callback and give the event payload
                callback(nextObj.payload);
            }
        })
    }
}