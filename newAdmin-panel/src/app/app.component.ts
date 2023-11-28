import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Content, Celeb, Survey, SurveyChoice, PlayerEntry, Hotspot, Advertisement, Overlay, OverlayChoice } from './content.model';
import { ContentService } from './content.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contentList: Content[] = [];
  selectedContent: Content | null = null;
  contentForm: FormGroup;

  constructor(private contentService: ContentService, private fb: FormBuilder) {
    this.contentForm = this.fb.group({
      Language: ['', Validators.required],
      Producer: ['', Validators.required],
      Show: [''],
      Event: [''],
      Category: [''],
      AgeRating: [''],
      Season: [''],
      Episode: [''],
      Title: ['', Validators.required],
      Intro: [''],
      Featured: [false],
      Thumbnail: [''],
      Region: [''],
      Poster: [''],
      Weblink: [''],
      IsLive: [false],
      DatePublished: [''],
      AuthorsList: [''],
      ArchiveDate: [''],
      TotalViews: [0, Validators.min(0)],
      Keywords: [''],
      CelebList: this.fb.array([]),
      Survey: this.fb.array([]),
      PlayerEntryList: this.fb.array([]),
      Hotspots: this.fb.array([]),
      Advertisements: this.fb.array([]),
      Overlays: this.fb.array([]),

    });
  }

  ngOnInit(): void {
    this.loadContentList();
  }

  loadContentList(): void {
    this.contentService.getContentList().subscribe((data) => (this.contentList = data));
  }

  onSelect(content: Content): void {
    this.selectedContent = content;
    this.contentForm.patchValue(content);
  }

  onSubmit(): void {
    if (this.contentForm.valid) {
      const formData = this.contentForm.value;
      if (this.selectedContent) {
        // Update existing content
        this.contentService.updateContent(this.selectedContent.Id, formData).subscribe(() => this.loadContentList());
      } else {
        // Create new content
        this.contentService.createContent(formData).subscribe(() => this.loadContentList());
      }
      this.selectedContent = null;
      this.contentForm.reset();
    }
  }

  onDelete(id: string): void {
    if (confirm('Are you sure you want to delete this content?')) {
      this.contentService.deleteContent(id).subscribe(() => this.loadContentList());
      this.selectedContent = null;
      this.contentForm.reset();
    }
  }

  get celebList() {
    return this.contentForm.get('CelebList') as FormArray; // Update the form array name
  }

  get surveyList() {
    return this.contentForm.get('Survey') as FormArray; // Update the form array name
  }

  get surveyChoiceList() {
    return this.contentForm.get('SurveyChoiceList') as FormArray; // Update the form array name
  }

  get playerEntryList() {
    return this.contentForm.get('PlayerEntryList') as FormArray; // Update the form array name
  }

  get hotspotList() {
    return this.contentForm.get('Hotspots') as FormArray; // Update the form array name
  }

  get advertisementList() {
    return this.contentForm.get('Advertisements') as FormArray; // Update the form array name
  }

  get overlayList() {
    return this.contentForm.get('Overlays') as FormArray; // Update the form array name
  }

  get overlayChoiceList() {
    return this.contentForm.get('OverlayChoiceList') as FormArray; // Update the form array name
  }
}
