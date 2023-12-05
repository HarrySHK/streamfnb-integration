// content.model.ts
export class Content {
  Id: string = '';
  Language: string = '';
  Producer: string = '';
  Show: string = '';
  Event: string = '';
  Category: string = '';
  AgeRating: string = '';
  Season: string = '';
  Episode: string = '';
  Title: string = '';
  Intro: string = '';
  Featured: boolean = false;
  Thumbnail: string = '';
  Region: string = '';
  Poster: string = '';
  Weblink: string = '';
  IsLive: boolean = false;
  DatePublished: string = '';
  AuthorsList: string = '';
  ArchiveDate: string = '';
  TotalViews: number = 0;
  Keywords: string = '';
  CelebList: Celeb[] = [];
  Survey: Survey[] = [];
  PlayerEntryList: PlayerEntry[] = [];
  Hotspots: Hotspot[] = [];
  Advertisements: Advertisement[] = [];
  Overlays: Overlay[] = [];
  SurveyChoice:SurveyChoice[]=[];
  OverlayChoice:OverlayChoice[]=[];

}

export class Celeb {
  Id: number = 0;
  Name: string = '';
  ContentIntro: string = '';
  CurrentRating: number = 0;
  Thumbnail: string = '';
  TotalClicks: number = 0;

}

export class Survey {
  Title: string = '';
  TotalResponses: number = 0;
  ChoiceList: SurveyChoice[] = [];
  addChoice(choice: SurveyChoice) {
    this.ChoiceList.push(choice);
  }
}

export class SurveyChoice {
  Title: string = '';
  Description: string = '';
  ResponseSize: number = 0;
}

export class PlayerEntry {
  Location: number = 0;
  PlayerID: number = 0;
  Clicks: number = 0;
}

export class Hotspot {
  Location: number = 0;
  ImageURL: string = '';
  Clicks: number = 0;
  Tooltip: string = '';
}

export class Advertisement {
  StartLocation: number = 0;
  EndLocation: number = 0;
  Type: string = '';
  TotalSkips: number = 0;
}

export class Overlay {
  Location: number = 0;
  Type: string = '';
  Title: string = '';
  ChoiceList: OverlayChoice[] = [];
  PauseVideo: boolean = false;
  DisplayTimeout: string = '';
  Optional: boolean = false;
  addChoice(choice: OverlayChoice) {
    this.ChoiceList.push(choice);
  }
}

export class OverlayChoice {
  Title: string = '';
  TotalResponses: number = 0;
}
