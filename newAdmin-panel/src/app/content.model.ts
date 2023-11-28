// content.model.ts

export interface Content {
  Id: string;
  Language: string;
  Producer: string;
  Show: string;
  Event: string;
  Category: string;
  AgeRating: string;
  Season: string;
  Episode: string;
  Title: string;
  Intro: string;
  Featured: boolean;
  Thumbnail: string;
  Region: string;
  Poster: string;
  Weblink: string;
  IsLive: boolean;
  DatePublished: string;
  AuthorsList: string;
  ArchiveDate: string;
  TotalViews: number;
  Keywords: string;
  CelebList: Celeb[];
  Survey: Survey[];
  PlayerEntryList: PlayerEntry[];
  Hotspots: Hotspot[];
  Advertisements: Advertisement[];
  Overlays: Overlay[];
}

export interface Celeb {
  Id: number;
  Name: string;
  ContentIntro: string;
  CurrentRating: number;
  Thumbnail: string;
  TotalClicks: number;
}

export interface Survey {
  Title: string;
  TotalResponses: number;
  ChoiceList: SurveyChoice[];
}

export interface SurveyChoice {
  Title: string;
  Description: string;
  ResponseSize: number;
}

export interface PlayerEntry {
  Location: number;
  PlayerID: number;
  Clicks: number;
}

export interface Hotspot {
  Location: number;
  ImageURL: string;
  Clicks: number;
  Tooltip: string;
}

export interface Advertisement {
  StartLocation: number;
  EndLocation: number;
  Type: string;
  TotalSkips: number;
}

export interface Overlay {
  Location: number;
  Type: string;
  Title: string;
  ChoiceList: OverlayChoice[];
  PauseVideo: boolean;
  DisplayTimeout: string;
  Optional: boolean;
}

export interface OverlayChoice {
  Title: string;
  TotalResponses: number;
}
