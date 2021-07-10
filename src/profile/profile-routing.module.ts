import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WallComponent} from './components/wall/wall.component';
import {BaseLayoutComponent} from './layout/base-layout/base-layout.component';
import {EditProfileComponent} from './components/edit-profile/edit-profile.component';
import {InfoProfileComponent} from './components/info-profile/info-profile.component';
import { FollowersComponent } from '../profile/components/followers/followers.component';

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
