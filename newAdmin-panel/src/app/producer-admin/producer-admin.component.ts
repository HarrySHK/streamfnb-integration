// producer-admin.component.ts

import { Component, OnInit } from '@angular/core';
import { ProducerService } from '../producer.service';
import { Producer } from '../producer.model';

@Component({
  selector: 'app-producer-admin',
  templateUrl: './producer-admin.component.html',
  styleUrls: ['./producer-admin.component.css'],
})
export class ProducerAdminComponent implements OnInit {
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

  constructor(private producerService: ProducerService) {}

  ngOnInit(): void {
    this.getProducers();
  }

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
