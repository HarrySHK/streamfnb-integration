import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testapp';
  readonly APIUrl = 'http://localhost:5091/api/';
  newVideo: any = {}; // Initialize an empty object to hold new video data
  newVideo1: any = {}; // Initialize an empty object to hold new video data

  constructor(private http: HttpClient) {}
  trending: any = [];
  recommended: any = [];

  ngOnInit() {
    this.refreshNotescat1();
    this.refreshNotescat2();
  }

  refreshNotescat1() {
    this.http.get(this.APIUrl + 'trending').subscribe((data) => {
      this.trending = data;
    });
  }
  refreshNotescat2() {
    this.http.get(this.APIUrl + 'recommended').subscribe((data) => {
      this.recommended = data;
    });
  }

  addVideocat1() {
    // Send a POST request to add a new video
    this.http.post(this.APIUrl + 'trending', this.newVideo).subscribe(() => {
      // Refresh the list of trending after adding a new one
      this.refreshNotescat1();
      // Reset the newVideo object for the next entry
      this.newVideo = {};
    });
  }
  addVideocat2() {
    // Send a POST request to add a new video
    this.http.post(this.APIUrl + 'recommended', this.newVideo1).subscribe(() => {
      // Refresh the list of trending after adding a new one
      this.refreshNotescat2();
      // Reset the newVideo object for the next entry
      this.newVideo1 = {};
    });
  }

  updateVideocat1(video: any) {
    // Send a PUT request to update an existing video
    this.http.put(this.APIUrl + 'trending/' + video.Id, video).subscribe(() => {
      // Refresh the list of trending after updating
      this.refreshNotescat1();
    });
  }
  updateVideocat2(video: any) {
    // Send a PUT request to update an existing video
    this.http.put(this.APIUrl + 'recommended/' + video.Id, video).subscribe(() => {
      // Refresh the list of trending after updating
      this.refreshNotescat2();
    });
  }

  deleteVideocat1(id: number) {
    // Send a DELETE request to remove a video by its ID
    this.http.delete(this.APIUrl + 'trending/' + id).subscribe(() => {
      // Refresh the list of trending after deleting
      this.refreshNotescat1();
    });
  }
  deleteVideocat2(id: number) {
    // Send a DELETE request to remove a video by its ID
    this.http.delete(this.APIUrl + 'recommended/' + id).subscribe(() => {
      // Refresh the list of trending after deleting
      this.refreshNotescat2();
    });
  }

}



// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'testapp';
//   readonly APIUrl = 'http://localhost:5091/api/';
//   newVideo: any = {};
//   newVideo1: any = {};
//   selectedCategory: string = 'trending';
//   trending: any = [];
//   recommended: any = [];

//   constructor(private http: HttpClient) {}

//   ngOnInit() {
//     this.refreshNotes();
//   }

//   refreshNotes() {
//     const apiUrl = this.selectedCategory === 'trending' ? 'trending' : 'recommended';
//     this.http.get(this.APIUrl + apiUrl).subscribe((data) => {
//       if (this.selectedCategory === 'trending') {
//         this.trending = data;
//       } else if (this.selectedCategory === 'recommended') {
//         this.recommended = data;
//       }
//     });
//   }

//   addVideo() {
//     const apiUrl = this.selectedCategory === 'trending' ? 'trending' : 'recommended';
//     const newVideo = this.selectedCategory === 'trending' ? this.newVideo : this.newVideo1;

//     console.log('Selected Category:', this.selectedCategory);
//     console.log('newVideo:', newVideo);

//     this.http.post(this.APIUrl + apiUrl, newVideo).subscribe(() => {
//       this.refreshNotes();
//       this.newVideo = {};
//       this.newVideo1 = {};
//     });
//   }

//   updateVideo(video: any) {
//     const apiUrl = this.selectedCategory === 'trending' ? 'trending' : 'recommended';

//     this.http.put(this.APIUrl + apiUrl + '/' + video.Id, video).subscribe(() => {
//       this.refreshNotes();
//     });
//   }

//   deleteVideo(id: number) {
//     const apiUrl = this.selectedCategory === 'trending' ? 'trending' : 'recommended';

//     this.http.delete(this.APIUrl + apiUrl + '/' + id).subscribe(() => {
//       this.refreshNotes();
//     });
//   }
// }




