import { Injectable } from '@angular/core';
import {BaseService} from '../../app/services/base-service';
import { EditWall } from '../models/profile';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WallService extends BaseService<any>{
  protected url = 'api/v1/wall';

}
