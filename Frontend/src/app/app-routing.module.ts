import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { CategoriesComponent } from './My_Components/categories/categories.component';
import { AppComponent } from './app.component';
import { MyappComponent } from './myapp/myapp.component';
import { PlayerProfileComponent } from './My_Components/player-profile/player-profile.component';


const routes: Routes = [
  // { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '', component: MyappComponent },
  { path: 'trending/:id', component: VideoPlayerComponent },
  { path: 'recommended/:id', component: VideoPlayerComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }, // Redirect to services by default
  { path: '**', redirectTo: '/' }, // Redirect to services for any unknown route
//  { path: '', component:PlayerProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
