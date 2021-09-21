import { Pipe, PipeTransform } from '@angular/core';
import { Releases } from './releases';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(Releases: Releases[], search: string): any {
    if (!Releases || !search){
    return Releases;
  }
  return Releases.filter(Releases => 
    Releases.version.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    Releases.theme.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    Releases.components.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    Releases.performance.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
}
}

