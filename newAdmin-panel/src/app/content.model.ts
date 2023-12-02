// content.model.ts
export class Content {
  Id: string = '';
  language: string = '';
  producer: string = '';
  show: string = '';
  event: string = '';
  category: string = '';
  ageRating: string = '';
  season: string = '';
  episode: string = '';
  title: string = '';
  intro: string = '';
  featured: boolean = false;
  thumbnail: string = '';
  region: string = '';
  poster: string = '';
  weblink: string = '';
  isLive: boolean = false;
  datePublished: string = '';
  authorsList: string = '';
  archiveDate: string = '';
  totalViews: number = 0;
  keywords: string = '';
  celebList: Celeb[] = [];
  survey: Survey[] = [];
  playerEntryList: PlayerEntry[] = [];
  hotspots: Hotspot[] = [];
  advertisements: Advertisement[] = [];
  overlays: Overlay[] = [];
}

export class Celeb {
  id: number = 0;
  name: string = '';
  contentIntro: string = '';
  currentRating: number = 0;
  thumbnail: string = '';
  totalClicks: number = 0;
}

export class Survey {
  title: string = '';
  totalResponses: number = 0;
  choiceList: SurveyChoice[] = [];
}

export class SurveyChoice {
  title: string = '';
  description: string = '';
  responseSize: number = 0;
}

export class PlayerEntry {
  location: number = 0;
  playerID: number = 0;
  clicks: number = 0;
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
