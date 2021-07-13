import { Component, OnInit } from '@angular/core';
import { WallService } from '../../services/wall.service';
import { Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.css']
})
export class WallComponent implements OnInit {
  postList: Array<any>;
  aSub: Subscription;
  searchStr = '';
  constructor(private wallService: WallService, private router: Router) { }

  ngOnInit(): void {
    this.getPotsList();
  }

  getPotsList(): void {
    this.aSub = this.wallService.get_list(6).subscribe(
      res => this.postList = res,
      error => console.log(error)
    );
  }
  async onEdit() {
    try {
      await this.router.navigate(['/profile/wall/edit']);
    } catch (err) {
      console.error(err);
    }
  }
}
