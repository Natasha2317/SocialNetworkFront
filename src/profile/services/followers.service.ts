import { Injectable } from '@angular/core';
import { BaseService } from '../../app/services/base-service';


@Injectable({
  providedIn: 'root'
})
export class FollowersService extends BaseService<any>{
  protected url = 'api/v1/follower';
}
