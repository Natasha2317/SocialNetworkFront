import { Injectable } from '@angular/core';
import { BaseService } from '../../app/services/base-service';
import { EditWall } from '../models/profile';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditWallService extends BaseService<any>{
  protected url = 'api/v1/wall/post';

  update(model: EditWall, id?: number): Observable<EditWall> {
    return this.http.put<EditWall>(`${environment.url}/${this.url}/`, model);
  }
}
