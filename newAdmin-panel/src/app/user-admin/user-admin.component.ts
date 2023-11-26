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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ProducerService } from '../producer.service';
import { Producer } from '../producer.model';

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
    TypeInput: '',  // new property for input field
    ShowsListInput: '',  // new property for input field
  };

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private producerService: ProducerService
  ) {
    this.userForm = this.fb.group({
      Email: ['', Validators.required],
      Phone: [''],
      Name: ['', Validators.required],
      // Add more fields based on your User model
    });
  }

  ngOnInit(): void {
    this.refreshUserList();
    this.getProducers();
  }

  // User methods
  refreshUserList() {
    this.userService.getUsers().subscribe(data => {
      this.userList = data;
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = this.userForm.value;
      if (this.selectedUser) {
        // Update existing user
        this.userService.updateUser(this.selectedUser.Id, formData).subscribe(() => {
          this.clearForm();
          this.refreshUserList();
        });
      } else {
        // Create new user
        this.userService.addUser(formData).subscribe(() => {
          this.clearForm();
          this.refreshUserList();
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
    // Convert TypeInput and ShowsListInput to arrays
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

  clearForm(): void {
    this.userForm.reset();
    this.selectedUser = null;

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
      TypeInput: '',  // new property for input field
      ShowsListInput: '',  // new property for input field
    };
  }
}
