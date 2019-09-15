import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/_common/core/services/http.service';
import { ITour } from 'src/app/_common/shared/models/tour.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TourService {


  constructor(public _http: HttpService) {
    debugger
   }

  getTours(): Observable<ITour[]> {
    return this._http.get("http://www.mocky.io/v2/5d7dcdfc2f00000834fedf90")
  }

}
