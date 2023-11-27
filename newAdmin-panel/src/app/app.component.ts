import { Component, OnInit } from '@angular/core';
import { ContentService } from './content.service';
import { Content } from './content.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contents: Content[] = [];
  selectedContent: Content | null = null;

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.getContents();
  }

  getContents(): void {
    this.contentService.getContents().subscribe(contents => {
      this.contents = contents;
    });
  }

  onSelect(content: Content): void {
    this.selectedContent = content;
  }

  clearSelection(): void {
    this.selectedContent = null;
  }

  onSubmit(content: Content): void {
    if (this.selectedContent) {
      this.contentService.updateContent(this.selectedContent.Id, content).subscribe(() => {
        this.clearSelection();
        this.getContents();
      });
    } else {
      this.contentService.addContent(content).subscribe(() => {
        this.clearSelection();
        this.getContents();
      });
    }
  }

  onDelete(id: string): void {
    this.contentService.deleteContent(id).subscribe(() => {
      this.clearSelection();
      this.getContents();
    });
  }
}
