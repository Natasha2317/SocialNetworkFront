import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.css']
})
export class InfoProfileComponent implements OnInit {
  id: number;
  userInfo: Profile;
  aSub: Subscription;
  constructor(private ProfileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
    this.getInfoProfile();
  }

  getInfoProfile(): void {
    this.aSub = this.ProfileService.get_single(1).subscribe(
      res => this.userInfo = res,
      error => console.log(error)
    );
  }


  async onEdit() {
    try {
      await this.router.navigate(['/profile/edit']);
    } catch (err) {
      console.error(err);
    }
  }
}
