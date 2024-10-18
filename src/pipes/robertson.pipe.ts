import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appRobertson',
  standalone: true,
})
export class RobertsonPipe implements PipeTransform {

  transform(value: string): string {
    return value + " is John Robertson's #1 fan!";
  }

}
