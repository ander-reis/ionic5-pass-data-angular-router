import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from '../services/data.service';

@Injectable({
    providedIn: 'root'
})
export class DataResolverService implements Resolve<any> {

    constructor(private dataService: DataService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        const id = route.paramMap.get('id');
        return this.dataService.getData(id);
    }
}
