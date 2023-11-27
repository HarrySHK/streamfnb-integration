// Celebs-admin.component.ts

// import { Component, OnInit } from '@angular/core';
// import { CelebsService } from '../Celebs.service';
// import { Celebs } from '../Celebs.model';

// @Component({
//   selector: 'app-Celebs-admin',
//   templateUrl: './Celebs-admin.component.html',
//   styleUrls: ['./Celebs-admin.component.css'],
// })
// export class CelebsAdminComponent implements OnInit {
//   Celebss: Celebs[] = [];
//   selectedCelebs: Celebs | null = null;
//   newCelebs: Celebs = {
//     id: '',
//     Type: [],
//     Name: '',
//     Intro: '',
//     ShowsList: [],
//     Thumbnail: '',
//     Rating: '',
//     Weblink: '',
//     Handle: '',
//     TypeInput: '',  // new property for input field
//     ShowsListInput: '',  // new property for input field
//   };

//   constructor(private CelebsService: CelebsService) {}

//   ngOnInit(): void {
//     this.getCelebss();
//   }

//   getCelebss(): void {
//     this.CelebsService.getCelebss().subscribe((Celebss) => {
//       this.Celebss = Celebss;
//     });
//   }

//   selectCelebs(Celebs: Celebs): void {
//     this.selectedCelebs = Celebs;
//   }

//   createCelebs(): void {
//     // Convert TypeInput and ShowsListInput to arrays
//     const formData = {
//       ...this.newCelebs,
//       Type: this.newCelebs.TypeInput.split(',').map((type: string) => type.trim()),
//       ShowsList: this.newCelebs.ShowsListInput.split(',').map((show: string) => show.trim()),
//     };

//     this.CelebsService.createCelebs(formData).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   updateCelebs(): void {
//     if (this.selectedCelebs) {
//       this.CelebsService
//         .updateCelebs(this.selectedCelebs.id, this.selectedCelebs)
//         .subscribe(() => {
//           this.getCelebss();
//           this.selectedCelebs = null;
//         });
//     }
//   }

//   deleteCelebs(id: string): void {
//     this.CelebsService.deleteCelebs(id).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   clearForm(): void {
//     this.newCelebs = {
//       id: '',
//       Type: [],
//       Name: '',
//       Intro: '',
//       ShowsList: [],
//       Thumbnail: '',
//       Rating: '',
//       Weblink: '',
//       Handle: '',
//       TypeInput: '',  // new property for input field
//       ShowsListInput: '',  // new property for input field
//     };
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { CelebsService } from '../celebs.service';
// import { Celebs } from '../celebs.model';

// @Component({
//   selector: 'app-Celebs-admin',
//   templateUrl: './Celebs-admin.component.html',
//   styleUrls: ['./Celebs-admin.component.css'],
// })
// export class CelebsAdminComponent implements OnInit {
//   celebs: Celebs[] = [];
//   selectedCelebs: Celebs | null = null;
//   newCelebs: Celebs = {
//     id: '',
//     Type: [],
//     Name: '',
//     Intro: '',
//     Thumbnail: '',
//     Rating: '',
//     Weblink: '',
//     Handle: '',
//     TypeInput: '',  // new property for input field
//   };

//   constructor(private CelebsService: CelebsService) {}

//   ngOnInit(): void {
//     this.getCelebss();
//   }

//   getCelebss(): void {
//     this.CelebsService.getCelebss().subscribe((celebs) => {
//       this.celebs = celebs;
//     });
//   }

//   selectCelebs(celebs: Celebs): void {
//     this.selectedCelebs = celebs;
//   }

//   createCelebs(): void {
//     // Convert TypeInput and ShowsListInput to arrays
//     const formData = {
//       ...this.newCelebs,
//       Type: this.newCelebs.TypeInput.split(',').map((type: string) => type.trim())
//     };

//     this.CelebsService.createCelebs(formData).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   updateCelebs(): void {
//     if (this.selectedCelebs) {
//       this.CelebsService
//         .updateCelebs(this.selectedCelebs.id, this.selectedCelebs)
//         .subscribe(() => {
//           this.getCelebss();
//           this.selectedCelebs = null;
//         });
//     }
//   }

//   deleteCelebs(id: string): void {
//     this.CelebsService.deleteCelebs(id).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   clearForm(): void {
//     this.newCelebs = {
//       id: '',
//       Type: [],
//       Name: '',
//       Intro: '',
//       Thumbnail: '',
//       Rating: '',
//       Weblink: '',
//       Handle: '',
//       TypeInput: '',  // new property for input field
//     };
//   }
// }

// event-admin.component.ts

import { Component, OnInit } from '@angular/core';
import {EventService} from '../event.service';
import { Event } from '../event.model';

@Component({
  selector: 'app-Event-admin',
  templateUrl: './Event-admin.component.html',
  styleUrls: ['./Event-admin.component.css'],
})
export class EventAdminComponent implements OnInit {
  Event: Event[] = [];
  selectedEvent: Event | null = null;
  newEvent: Event = {
    id: '',
    Name: '',
    Thumbnail: '',
    Trending: '',
    Date: ''
  };

  constructor(private EventService: EventService) {}

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents(): void {
    this.EventService.getEvents().subscribe((Event) => {
      this.Event = Event;
    });
  }

  selectEvent(Event: Event): void {
    this.selectedEvent = Event;
  }

  createEvent(): void {
    // Convert TypeInput and ShowsListInput to arrays
    const formData = {
      ...this.newEvent,
    };

    this.EventService.createEvent(formData).subscribe(() => {
      this.getEvents();
      this.clearForm();
    });
  }

  updateEvent(): void {
    if (this.selectedEvent) {
      this.EventService
        .updateEvent(this.selectedEvent.id, this.selectedEvent)
        .subscribe(() => {
          this.getEvents();
          this.selectedEvent = null;
        });
    }
  }

  deleteEvent(id: string): void {
    this.EventService.deleteEvent(id).subscribe(() => {
      this.getEvents();
      this.clearForm();
    });
  }

  clearForm(): void {
    this.newEvent = {
      id: '',
      Name: '',
      Thumbnail: '',
      Trending: '',
      Date: ''
    };
  }
}
