import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { WallComponent } from './components/wall/wall.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfoProfileComponent } from './components/info-profile/info-profile.component';
import { MyfilterPipe } from '../profile/pipes/myfilter.pipe';
import { FollowersComponent } from '../profile/components/followers/followers.component';


@NgModule({
  declarations: [
    WallComponent,
    EditProfileComponent,
    BaseLayoutComponent,
    InfoProfileComponent,
    MyfilterPipe,
    FollowersComponent

  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ProfileModule { }
