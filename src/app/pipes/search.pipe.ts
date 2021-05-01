import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(users: Array<User>, query?: string): any {

      
    if(!users)return null;
    if(!query)return users;

    query = query.toLowerCase();

    return users.filter(function(item){
        return JSON.stringify(item).toLowerCase().includes(query);
    });
}

}
