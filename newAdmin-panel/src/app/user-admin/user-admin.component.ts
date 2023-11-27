// // user-admin.component.ts

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-user-admin',
//   templateUrl: './user-admin.component.html',
//   styleUrls: ['./user-admin.component.css']
// })
// export class UserAdminComponent implements OnInit {
//   userForm: FormGroup;
//   userList: any[] = [];
//   selectedUser: any;

//   constructor(private fb: FormBuilder, private userService: UserService) {
//     this.userForm = this.fb.group({
//       Email: ['', Validators.required],
//       Phone: [''],
//       Name: ['', Validators.required],
//       // Add more fields based on your User model
//     });
//   }

//   ngOnInit(): void {
//     this.refreshUserList();
//   }

//   refreshUserList() {
//     this.userService.getUsers().subscribe(data => {
//       this.userList = data;
//     });
//   }

//   onSubmit() {
//     if (this.userForm.valid) {
//       const formData = this.userForm.value;
//       if (this.selectedUser) {
//         // Update existing user
//         this.userService.updateUser(this.selectedUser.Id, formData).subscribe(() => {
//           this.clearForm();
//           this.refreshUserList();
//         });
//       } else {
//         // Create new user
//         this.userService.addUser(formData).subscribe(() => {
//           this.clearForm();
//           this.refreshUserList();
//         });
//       }
//     }
//   }

//   onSelectUser(user: any) {
//     this.selectedUser = user;
//     this.userForm.patchValue(user);
//   }

//   onDeleteUser(id: string) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.refreshUserList();
//       this.clearForm();
//     });
//   }

//   clearForm() {
//     this.userForm.reset();
//     this.selectedUser = null;
//   }
// }


// admin.component.ts

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../user.service';
// import { ProducerService } from '../producer.service';
// import { CelebsService } from '../celebs.service';
// import { Producer } from '../producer.model';
// import { Celebs } from '../celebs.model';

// @Component({
//   selector: 'app-user-admin',
//   templateUrl: './user-admin.component.html',
//   styleUrls: ['./user-admin.component.css']
// })
// export class UserAdminComponent implements OnInit {
//   userForm: FormGroup;
//   userList: any[] = [];
//   selectedUser: any;

//   producers: Producer[] = [];
//   selectedProducer: Producer | null = null;
//   newProducer: Producer = {
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

//   constructor(
//     private fb: FormBuilder,
//     private userService: UserService,
//     private producerService: ProducerService,
//     private celebsService: CelebsService
//   ) {
//     this.userForm = this.fb.group({
//       Email: ['', Validators.required],
//       Phone: [''],
//       Name: ['', Validators.required],
//       // Add more fields based on your User model
//     });
//   }

//   ngOnInit(): void {
//     this.refreshUserList();
//     this.getProducers();
//     this.getCelebss();
//   }

//   // User methods
//   refreshUserList() {
//     this.userService.getUsers().subscribe(data => {
//       this.userList = data;
//     });
//   }

//   onSubmit() {
//     if (this.userForm.valid) {
//       const formData = this.userForm.value;
//       if (this.selectedUser) {
//         // Update existing user
//         this.userService.updateUser(this.selectedUser.Id, formData).subscribe(() => {
//           this.clearForm();
//           this.refreshUserList();
//         });
//       } else {
//         // Create new user
//         this.userService.addUser(formData).subscribe(() => {
//           this.clearForm();
//           this.refreshUserList();
//         });
//       }
//     }
//   }

//   onSelectUser(user: any) {
//     this.selectedUser = user;
//     this.userForm.patchValue(user);
//   }

//   onDeleteUser(id: string) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.refreshUserList();
//       this.clearForm();
//     });
//   }

//   // Producer methods
//   getProducers(): void {
//     this.producerService.getProducers().subscribe((producers) => {
//       this.producers = producers;
//     });
//   }

//   selectProducer(producer: Producer): void {
//     this.selectedProducer = producer;
//   }

//   createProducer(): void {
//     // Convert TypeInput and ShowsListInput to arrays
//     const formData = {
//       ...this.newProducer,
//       Type: this.newProducer.TypeInput.split(',').map((type: string) => type.trim()),
//       ShowsList: this.newProducer.ShowsListInput.split(',').map((show: string) => show.trim()),
//     };

//     this.producerService.createProducer(formData).subscribe(() => {
//       this.getProducers();
//       this.clearForm();
//     });
//   }

//   updateProducer(): void {
//     if (this.selectedProducer) {
//       this.producerService
//         .updateProducer(this.selectedProducer.id, this.selectedProducer)
//         .subscribe(() => {
//           this.getProducers();
//           this.selectedProducer = null;
//         });
//     }
//   }

//   deleteProducer(id: string): void {
//     this.producerService.deleteProducer(id).subscribe(() => {
//       this.getProducers();
//       this.clearForm();
//     });
//   }

//   // Celebs methods
//   getCelebss(): void {
//     this.celebsService.getCelebss().subscribe((celebs) => {
//       this.celebs = celebs;
//     });
//   }

//   selectCelebs(celebs: Celebs): void {
//     this.selectedCelebs = celebs;
//   }

//   createCelebs(): void {
//     // Convert TypeInput to an array
//     const formData = {
//       ...this.newCelebs,
//       Type: this.newCelebs.TypeInput.split(',').map((type: string) => type.trim())
//     };

//     this.celebsService.createCelebs(formData).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   updateCelebs(): void {
//     if (this.selectedCelebs) {
//       this.celebsService
//         .updateCelebs(this.selectedCelebs.id, this.selectedCelebs)
//         .subscribe(() => {
//           this.getCelebss();
//           this.selectedCelebs = null;
//         });
//     }
//   }

//   deleteCelebs(id: string): void {
//     this.celebsService.deleteCelebs(id).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   clearForm(): void {
//     this.userForm.reset();
//     this.selectedUser = null;

//     this.newProducer = {
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

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { UserService } from '../user.service';
// import { ProducerService } from '../producer.service';
// import { CelebsService } from '../celebs.service';
// import { EventService } from '../event.service';
// import { Producer } from '../producer.model';
// import { Celebs } from '../celebs.model';
// import { Event } from '../event.model';

// @Component({
//   selector: 'app-user-admin',
//   templateUrl: './user-admin.component.html',
//   styleUrls: ['./user-admin.component.css']
// })
// export class UserAdminComponent implements OnInit {
//   userForm: FormGroup;
//   userList: any[] = [];
//   selectedUser: any;

//   producers: Producer[] = [];
//   selectedProducer: Producer | null = null;
//   newProducer: Producer = {
//     id: '',
//     Type: [],
//     Name: '',
//     Intro: '',
//     ShowsList: [],
//     Thumbnail: '',
//     Rating: '',
//     Weblink: '',
//     Handle: '',
//     TypeInput: '',
//     ShowsListInput: '',
//   };

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
//     TypeInput: '',
//   };

//   events: Event[] = [];
//   selectedEvent: Event | null = null;
//   newEvent: Event = {
//     id: '',
//     Name: '',
//     Thumbnail: '',
//     Trending: '',
//     Date: ''
//   };

//   constructor(
//     private fb: FormBuilder,
//     private userService: UserService,
//     private producerService: ProducerService,
//     private celebsService: CelebsService,
//     private eventService: EventService
//   ) {
//     this.userForm = this.fb.group({
//       Email: ['', Validators.required],
//       Phone: [''],
//       Name: ['', Validators.required],
//     });
//   }

//   ngOnInit(): void {
//     this.refreshUserList();
//     this.getProducers();
//     this.getCelebss();
//     this.getEvents();
//   }

//   // User methods
//   refreshUserList() {
//     this.userService.getUsers().subscribe(data => {
//       this.userList = data;
//     });
//   }

//   onSubmit() {
//     if (this.userForm.valid) {
//       const formData = this.userForm.value;
//       if (this.selectedUser) {
//         this.userService.updateUser(this.selectedUser.Id, formData).subscribe(() => {
//           this.clearForm();
//           this.refreshUserList();
//         });
//       } else {
//         this.userService.addUser(formData).subscribe(() => {
//           this.clearForm();
//           this.refreshUserList();
//         });
//       }
//     }
//   }

//   onSelectUser(user: any) {
//     this.selectedUser = user;
//     this.userForm.patchValue(user);
//   }

//   onDeleteUser(id: string) {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.refreshUserList();
//       this.clearForm();
//     });
//   }

//   // Producer methods
//   getProducers(): void {
//     this.producerService.getProducers().subscribe((producers) => {
//       this.producers = producers;
//     });
//   }

//   selectProducer(producer: Producer): void {
//     this.selectedProducer = producer;
//   }

//   createProducer(): void {
//     const formData = {
//       ...this.newProducer,
//       Type: this.newProducer.TypeInput.split(',').map((type: string) => type.trim()),
//       ShowsList: this.newProducer.ShowsListInput.split(',').map((show: string) => show.trim()),
//     };

//     this.producerService.createProducer(formData).subscribe(() => {
//       this.getProducers();
//       this.clearForm();
//     });
//   }

//   updateProducer(): void {
//     if (this.selectedProducer) {
//       this.producerService
//         .updateProducer(this.selectedProducer.id, this.selectedProducer)
//         .subscribe(() => {
//           this.getProducers();
//           this.selectedProducer = null;
//         });
//     }
//   }

//   deleteProducer(id: string): void {
//     this.producerService.deleteProducer(id).subscribe(() => {
//       this.getProducers();
//       this.clearForm();
//     });
//   }

//   // Celebs methods
//   getCelebss(): void {
//     this.celebsService.getCelebss().subscribe((celebs) => {
//       this.celebs = celebs;
//     });
//   }

//   selectCelebs(celebs: Celebs): void {
//     this.selectedCelebs = celebs;
//   }

//   createCelebs(): void {
//     const formData = {
//       ...this.newCelebs,
//       Type: this.newCelebs.TypeInput.split(',').map((type: string) => type.trim())
//     };

//     this.celebsService.createCelebs(formData).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   updateCelebs(): void {
//     if (this.selectedCelebs) {
//       this.celebsService
//         .updateCelebs(this.selectedCelebs.id, this.selectedCelebs)
//         .subscribe(() => {
//           this.getCelebss();
//           this.selectedCelebs = null;
//         });
//     }
//   }

//   deleteCelebs(id: string): void {
//     this.celebsService.deleteCelebs(id).subscribe(() => {
//       this.getCelebss();
//       this.clearForm();
//     });
//   }

//   // Event methods
//   getEvents(): void {
//     this.eventService.getEvents().subscribe((events) => {
//       this.events = events;
//     });
//   }

//   selectEvent(event: Event): void {
//     this.selectedEvent = event;
//   }

//   createEvent(): void {
//     const formData = {
//       ...this.newEvent,
//     };

//     this.eventService.createEvent(formData).subscribe(() => {
//       this.getEvents();
//       this.clearForm();
//     });
//   }

//   updateEvent(): void {
//     if (this.selectedEvent) {
//       this.eventService
//         .updateEvent(this.selectedEvent.id, this.selectedEvent)
//         .subscribe(() => {
//           this.getEvents();
//           this.selectedEvent = null;
//         });
//     }
//   }

//   deleteEvent(id: string): void {
//     this.eventService.deleteEvent(id).subscribe(() => {
//       this.getEvents();
//       this.clearForm();
//     });
//   }

//   clearForm(): void {
//     this.userForm.reset();
//     this.selectedUser = null;

//     this.newProducer = {
//       id: '',
//       Type: [],
//       Name: '',
//       Intro: '',
//       ShowsList: [],
//       Thumbnail: '',
//       Rating: '',
//       Weblink: '',
//       Handle: '',
//       TypeInput: '',
//       ShowsListInput: '',
//     };

//     this.newCelebs = {
//       id: '',
//       Type: [],
//       Name: '',
//       Intro: '',
//       Thumbnail: '',
//       Rating: '',
//       Weblink: '',
//       Handle: '',
//       TypeInput: '',
//     };

//     this.newEvent = {
//       id: '',
//       Name: '',
//       Thumbnail: '',
//       Trending: '',
//       Date: ''
//     };
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ProducerService } from '../producer.service';
import { CelebsService } from '../celebs.service';
import { EventService } from '../event.service';
import { Producer } from '../producer.model';
import { Celebs } from '../celebs.model';
import { Event } from '../event.model';
import { Poll } from '../poll.model';
import { PollService } from '../poll.service';



@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  userForm: FormGroup;
  userList: any[] = [];
  selectedUser: any;

  producers: Producer[] = [];
  selectedProducer: Producer | null = null;
  newProducer: Producer = {
    id: '',
    Type: [],
    Name: '',
    Intro: '',
    ShowsList: [],
    Thumbnail: '',
    Rating: '',
    Weblink: '',
    Handle: '',
    TypeInput: '',
    ShowsListInput: '',
  };

  celebs: Celebs[] = [];
  selectedCelebs: Celebs | null = null;
  newCelebs: Celebs = {
    id: '',
    Type: [],
    Name: '',
    Intro: '',
    Thumbnail: '',
    Rating: '',
    Weblink: '',
    Handle: '',
    TypeInput: '',
  };

  events: Event[] = [];
  selectedEvent: Event | null = null;
  newEvent: Event = {
    id: '',
    Name: '',
    Thumbnail: '',
    Trending: '',
    Date: ''
  };

  pollForm: FormGroup;
  polls: Poll[] = [];
  selectedPoll: Poll | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private producerService: ProducerService,
    private celebsService: CelebsService,
    private eventService: EventService,
    private pollService: PollService
  ) {
    this.userForm = this.fb.group({
      Email: ['', Validators.required],
      Phone: [''],
      Name: ['', Validators.required],
    });
    this.pollForm = this.fb.group({
      Event: ['', Validators.required],
      Producer: ['', Validators.required],
      Date: ['', Validators.required],
      SurveyItem: ['', Validators.required],
      SurveyValue: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.refreshUserList();
    this.getProducers();
    this.getCelebss();
    this.getEvents();
    this.getPolls();

  }

  // User methods
  refreshUserList() {
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    });
  }

  getPolls(): void {
    this.pollService.getPolls().subscribe((polls) => {
      this.polls = polls;
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (this.selectedUser) {
        this.userService.updateUser(this.selectedUser.Id, formData).subscribe(() => {
          this.clearForm();
          this.refreshUserList();
        });
      } else {
        this.userService.addUser(formData).subscribe(() => {
          this.clearForm();
          this.refreshUserList();
        });
      }
    }
  }

  onSubmitp(): void {
    if (this.pollForm.valid) {
      const formData: Poll = {
        id: this.selectedPoll?.id || '',
        Event: this.pollForm.value.Event,
        Producer: this.pollForm.value.Producer,
        Date: this.pollForm.value.Date,
        SurveyDataList: {
          Item: this.pollForm.value.SurveyItem,
          Value: this.pollForm.value.SurveyValue,
        },
      };

      if (this.selectedPoll) {
        this.pollService.updatePoll(this.selectedPoll.id, formData).subscribe(() => {
          this.clearForm();
          this.getPolls();
        });
      } else {
        this.pollService.createPoll(formData).subscribe(() => {
          this.clearForm();
          this.getPolls();
        });
      }
    }
  }

  onSelectUser(user: any) {
    this.selectedUser = user;
    this.userForm.patchValue(user);
  }

  onDeleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.refreshUserList();
      this.clearForm();
    });
  }

  onSelectPoll(poll: Poll): void {
    this.selectedPoll = poll;
    this.pollForm.patchValue({
      Event: poll.Event,
      Producer: poll.Producer,
      Date: poll.Date,
      SurveyItem: poll.SurveyDataList.Item,
      SurveyValue: poll.SurveyDataList.Value,
    });
  }

  onDeletePoll(id: string): void {
    this.pollService.deletePoll(id).subscribe(() => {
      this.getPolls();
      this.clearForm();
    });
  }


  // Producer methods
  getProducers(): void {
    this.producerService.getProducers().subscribe((producers) => {
      this.producers = producers;
    });
  }

  selectProducer(producer: Producer): void {
    this.selectedProducer = producer;
  }

  createProducer(): void {
    const formData = {
      ...this.newProducer,
      Type: this.newProducer.TypeInput.split(',').map((type: string) => type.trim()),
      ShowsList: this.newProducer.ShowsListInput.split(',').map((show: string) => show.trim()),
    };

    this.producerService.createProducer(formData).subscribe(() => {
      this.getProducers();
      this.clearForm();
    });
  }

  updateProducer(): void {
    if (this.selectedProducer) {
      this.producerService
        .updateProducer(this.selectedProducer.id, this.selectedProducer)
        .subscribe(() => {
          this.getProducers();
          this.selectedProducer = null;
        });
    }
  }

  deleteProducer(id: string): void {
    this.producerService.deleteProducer(id).subscribe(() => {
      this.getProducers();
      this.clearForm();
    });
  }

  // Celebs methods
  getCelebss(): void {
    this.celebsService.getCelebss().subscribe((celebs) => {
      this.celebs = celebs;
    });
  }

  selectCelebs(celebs: Celebs): void {
    this.selectedCelebs = celebs;
  }

  createCelebs(): void {
    const formData = {
      ...this.newCelebs,
      Type: this.newCelebs.TypeInput.split(',').map((type: string) => type.trim())
    };

    this.celebsService.createCelebs(formData).subscribe(() => {
      this.getCelebss();
      this.clearForm();
    });
  }

  updateCelebs(): void {
    if (this.selectedCelebs) {
      this.celebsService
        .updateCelebs(this.selectedCelebs.id, this.selectedCelebs)
        .subscribe(() => {
          this.getCelebss();
          this.selectedCelebs = null;
        });
    }
  }

  deleteCelebs(id: string): void {
    this.celebsService.deleteCelebs(id).subscribe(() => {
      this.getCelebss();
      this.clearForm();
    });
  }

  // Event methods
  getEvents(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events;
    });
  }

  selectEvent(event: Event): void {
    this.selectedEvent = event;
  }

  createEvent(): void {
    const formData = {
      ...this.newEvent,
    };

    this.eventService.createEvent(formData).subscribe(() => {
      this.getEvents();
      this.clearForm();
    });
  }

  updateEvent(): void {
    if (this.selectedEvent) {
      this.eventService
        .updateEvent(this.selectedEvent.id, this.selectedEvent)
        .subscribe(() => {
          this.getEvents();
          this.selectedEvent = null;
        });
    }
  }

  deleteEvent(id: string): void {
    this.eventService.deleteEvent(id).subscribe(() => {
      this.getEvents();
      this.clearForm();
    });
  }

  clearForm(): void {
    this.userForm.reset();
    this.selectedUser = null;

    this.pollForm.reset();
    this.selectedPoll = null;

    this.newProducer = {
      id: '',
      Type: [],
      Name: '',
      Intro: '',
      ShowsList: [],
      Thumbnail: '',
      Rating: '',
      Weblink: '',
      Handle: '',
      TypeInput: '',
      ShowsListInput: '',
    };

    this.newCelebs = {
      id: '',
      Type: [],
      Name: '',
      Intro: '',
      Thumbnail: '',
      Rating: '',
      Weblink: '',
      Handle: '',
      TypeInput: '',
    };

    this.newEvent = {
      id: '',
      Name: '',
      Thumbnail: '',
      Trending: '',
      Date: ''
    };
  }
}
