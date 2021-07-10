
import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../../services/followers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {
  ListFollower: Array<any>;
  aSub: Subscription;
  searchStr = '';
  constructor(private FollowersService: FollowersService) { }

  ngOnInit(): void {
    this.getFollowersList();
  }

  getFollowersList(): void {
    this.aSub = this.FollowersService.get_list(1).subscribe(
      res => this.ListFollower = res,
      error => console.log(error)
    );
  }
}
