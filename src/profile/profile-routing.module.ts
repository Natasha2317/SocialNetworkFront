import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WallComponent } from './components/wall/wall.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { InfoProfileComponent } from './components/info-profile/info-profile.component';
import { FollowersComponent } from '../profile/components/followers/followers.component';
import { EditWallComponent } from '../profile/components/edit-wall/edit-wall.component';

const routes: Routes = [
  {
    path: 'profile', component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: InfoProfileComponent
      },
      {
        path: 'edit',
        component: EditProfileComponent
      },
      {
        path: 'wall',
        component: WallComponent
      },
      {
        path: 'wall/edit',
        component: EditWallComponent
      },
      {
        path: 'follower',
        component: FollowersComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {
}
