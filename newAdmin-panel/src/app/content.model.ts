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
  location: number = 0;
  imageURL: string = '';
  clicks: number = 0;
  tooltip: string = '';
}

export class Advertisement {
  startLocation: number = 0;
  endLocation: number = 0;
  type: string = '';
  totalSkips: number = 0;
}

export class Overlay {
  location: number = 0;
  type: string = '';
  title: string = '';
  choiceList: OverlayChoice[] = [];
  pauseVideo: boolean = false;
  displayTimeout: string = '';
  optional: boolean = false;
}

export class OverlayChoice {
  title: string = '';
  totalResponses: number = 0;
}
