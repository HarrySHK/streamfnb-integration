// import { Component, OnInit } from '@angular/core';
// import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { Content, Celeb, Survey, SurveyChoice, PlayerEntry, Hotspot, Advertisement, Overlay, OverlayChoice } from './content.model';
// import { ContentService } from './content.service';

import { Component, OnInit } from '@angular/core';
import { Content, Celeb, Survey, PlayerEntry, Hotspot, Advertisement, Overlay } from './content.model';
import { ContentService } from './content.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contentList: Content[] = [];

  content: Content = new Content(); // Initialize with default values or empty objects
  // Add additional lists if needed
  celeb: Celeb = new Celeb();
  survey: Survey = new Survey();
  playerEntry: PlayerEntry = new PlayerEntry();
  hotspot: Hotspot = new Hotspot();
  advertisement: Advertisement = new Advertisement();
  overlay: Overlay = new Overlay();

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.fetchContent();
  }

  // fetchContent(): void {
  //   this.contentService.getAllContent().subscribe(
  //     (contentList) => {
  //       this.contentList = contentList;
  //     },
  //     (error) => {
  //       console.error('Error fetching content:', error);
  //     }
  //   );
  // }


  fetchContent(): void {
    this.contentService.getAllContent().subscribe(
      (contentList) => {
        this.contentList = contentList;
        console.log('Content List:', this.contentList);
      },
      (error) => {
        console.error('Error fetching content:', error);
      }
    );
  }

  submitContent(): void {
    // Add the current celeb, survey, etc. to the content object before submitting
    this.content.CelebList.push(this.celeb);
    this.content.Survey.push(this.survey);
    this.content.PlayerEntryList.push(this.playerEntry);
    this.content.Hotspots.push(this.hotspot);
    this.content.Advertisements.push(this.advertisement);
    this.content.Overlays.push(this.overlay);

    this.contentService.createContent(this.content).subscribe(
      (createdContent) => {
        console.log('Content created successfully:', createdContent);
        // Clear input fields or reset the form
        this.clearForm();
      },
      (error) => {
        console.error('Error creating content:', error);
      }
    );
  }

  clearForm(): void {
    // Reset all input fields to their initial values
    this.content = new Content();
    this.celeb = new Celeb();
    this.survey = new Survey();
    this.playerEntry = new PlayerEntry();
    this.hotspot = new Hotspot();
    this.advertisement = new Advertisement();
    this.overlay = new Overlay();
    this.contentList = [];
  }
}
