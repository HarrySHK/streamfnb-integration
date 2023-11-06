using System;
using System.Collections.Generic;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace streamapif.Models
{
    public class Content
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; } = string.Empty;

        [BsonElement("Language")]
        public string Language { get; set; } = string.Empty;

        [BsonElement("Producer")]
        public string Producer { get; set; } = string.Empty;

        [BsonElement("Show")]
        public string Show { get; set; } = string.Empty;

        [BsonElement("Event")]
        public string Event { get; set; } = string.Empty;

        [BsonElement("Category")]
        public string Category { get; set; } = string.Empty;

        [BsonElement("AgeRating")]
        public string AgeRating { get; set; } = string.Empty;

        [BsonElement("Season")]
        public string Season { get; set; } = string.Empty;

        [BsonElement("Episode")]
        public string Episode { get; set; } = string.Empty;

        [BsonElement("Title")]
        public string Title { get; set; } = string.Empty;

        [BsonElement("Intro")]
        public string Intro { get; set; } = string.Empty;

        [BsonElement("Featured")]
        public bool Featured { get; set; }

        [BsonElement("Thumbnail")]
        public string Thumbnail { get; set; } = string.Empty;

        [BsonElement("Region")]
        public string Region { get; set; } = string.Empty;

        [BsonElement("Poster")]
        public string Poster { get; set; } = string.Empty;

        [BsonElement("Weblink")]
        public string Weblink { get; set; } = string.Empty;

        [BsonElement("IsLive")]
        public bool IsLive { get; set; }

        [BsonElement("DatePublished")]
        public string DatePublished { get; set; } = string.Empty;

        [BsonElement("AuthorsList")]
        public string AuthorsList { get; set; } = string.Empty;

        [BsonElement("ArchiveDate")]
        public string ArchiveDate { get; set; } = string.Empty;

        [BsonElement("TotalViews")]
        public int TotalViews { get; set; }

        [BsonElement("Keywords")]
        public string Keywords { get; set; } = string.Empty;

        [BsonElement("CelebList")]
        public List<Celeb> CelebList { get; set; } = new List<Celeb>();

        [BsonElement("Survey")]
        public List<Survey> Survey { get; set; } = new List<Survey>();

        [BsonElement("PlayerEntryList")]
        public List<PlayerEntry> PlayerEntryList { get; set; } = new List<PlayerEntry>();

        [BsonElement("Hotspots")]
        public List<Hotspot> Hotspots { get; set; } = new List<Hotspot>();

        [BsonElement("Advertisements")]
        public List<Advertisement> Advertisements { get; set; } = new List<Advertisement>();

        [BsonElement("Overlays")]
        public List<Overlay> Overlays { get; set; } = new List<Overlay>();
    }

    public class Celeb
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string ContentIntro { get; set; } = string.Empty;
        public double CurrentRating { get; set; }
        public string Thumbnail { get; set; } = string.Empty;
        public int TotalClicks { get; set; }
    }

    public class Survey
    {
        public string Title { get; set; } = string.Empty;
        public int TotalResponses { get; set; }
        public List<SurveyChoice> ChoiceList { get; set; } = new List<SurveyChoice>();
    }

    public class SurveyChoice
    {
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public int ResponseSize { get; set; }
    }

    public class PlayerEntry
    {
        public int Location { get; set; }
        public int PlayerID { get; set; }
        public int Clicks { get; set; }
    }

    public class Hotspot
    {
        public int Location { get; set; }
        public string ImageURL { get; set; } = string.Empty;
        public int Clicks { get; set; }
        public string Tooltip { get; set; } = string.Empty;
    }

    public class Advertisement
    {
        public int StartLocation { get; set; }
        public int EndLocation { get; set; }
        public string Type { get; set; } = string.Empty;
        public int TotalSkips { get; set; }
    }

    public class Overlay
    {
        public int Location { get; set; }
        public string Type { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public List<OverlayChoice> ChoiceList { get; set; } = new List<OverlayChoice>();
        public bool PauseVideo { get; set; }
        public string DisplayTimeout { get; set; } = string.Empty;
        public bool Optional { get; set; }
    }

    public class OverlayChoice
    {
        public string Title { get; set; } = string.Empty;
        public int TotalResponses { get; set; }
    }
}
