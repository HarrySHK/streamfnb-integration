import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContentService } from '../app/content.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contentForm: FormGroup;
  contentList: any[] = [];
  selectedContent: any;

  constructor(private fb: FormBuilder, private contentService: ContentService) {
    this.contentForm = this.fb.group({
      Language: ['', Validators.required],
      Producer: ['', Validators.required],
      Show: [''],
      Event: [''],
      Category: [''],
      // Add other fields here based on your Content model
    });
  }

  ngOnInit(): void {
    this.refreshContentList();
  }

  refreshContentList() {
    this.contentService.getAllContent().subscribe(data => {
      this.contentList = data;
    });
  }

  onSubmit() {
    if (this.contentForm.valid) {
      const formData = this.contentForm.value;
      if (this.selectedContent) {
        // Update existing content
        this.contentService.updateContent(this.selectedContent.Id, formData).subscribe(() => {
          this.clearForm();
          this.refreshContentList();
        });
      } else {
        // Create new content
        this.contentService.addContent(formData).subscribe(() => {
          this.clearForm();
          this.refreshContentList();
        });
      }
    }
  }

  onSelectContent(content: any) {
    this.selectedContent = content;
    this.contentForm.patchValue(content);
  }

  onDeleteContent(id: string) {
    this.contentService.deleteContent(id).subscribe(() => {
      this.refreshContentList();
      this.clearForm();
    });
  }

  clearForm() {
    this.contentForm.reset();
    this.selectedContent = null;
  }

}
