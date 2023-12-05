import { Component, OnInit } from '@angular/core';
import { Content, Celeb, Survey, PlayerEntry, Hotspot, Advertisement, Overlay, SurveyChoice, OverlayChoice } from './content.model';
import { ContentService } from './content.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  contentList: Content[] = [];

  content: Content = new Content();
  celeb: Celeb = new Celeb();
  surveyChoice: SurveyChoice =new SurveyChoice();
  survey: Survey = new Survey();
  playerEntry: PlayerEntry = new PlayerEntry();
  hotspot: Hotspot = new Hotspot();
  advertisement: Advertisement = new Advertisement();
  overlay: Overlay = new Overlay();
  overlayChoice: OverlayChoice = new OverlayChoice();

  constructor(private contentService: ContentService) {}

  ngOnInit(): void {
    this.fetchContent();
  }


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
    this.content.CelebList.push(this.celeb);
    this.content.SurveyChoice.push(this.surveyChoice)
    this.content.Survey.push(this.survey);
    this.content.PlayerEntryList.push(this.playerEntry);
    this.content.Hotspots.push(this.hotspot);
    this.content.Advertisements.push(this.advertisement);
    this.content.OverlayChoice.push(this.overlayChoice)
    this.content.Overlays.push(this.overlay);

    this.survey.addChoice(this.surveyChoice)
    this.overlay.addChoice(this.overlayChoice)

    this.contentService.createContent(this.content).subscribe(
      (createdContent) => {
        console.log('Content created successfully:', createdContent);
        this.clearForm();
      },
      (error) => {
        console.error('Error creating content:', error);
      }
    );
  }

  clearForm(): void {
    this.content = new Content();
    this.celeb = new Celeb();
    this.surveyChoice = new SurveyChoice()
    this.survey = new Survey();
    this.playerEntry = new PlayerEntry();
    this.hotspot = new Hotspot();
    this.advertisement = new Advertisement();
    this.overlay = new Overlay();
    this.contentList = [];
  }
}
