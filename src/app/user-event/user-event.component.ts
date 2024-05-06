import { Component, OnInit } from '@angular/core';
import { EventService } from '../service/event/event.service';

@Component({
  selector: 'app-user-event',
  templateUrl: './user-event.component.html',
  styleUrls: ['./user-event.component.css']
})
export class UserEventComponent implements OnInit {

  events: any[] = []; 

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (data: any) => {
        this.events = data; 
      },
      (error) => {
        console.error('Une erreur s\'est produite lors du chargement des événements : ', error);
      }
    );
  }

  participateEvent(eventId: number) {
    // Ajoutez ici la logique pour participer à l'événement
    console.log('Participer à l\'événement avec l\'ID : ', eventId);
    alert('Vous avez participé à l\'événement avec succès !');
  }

}
