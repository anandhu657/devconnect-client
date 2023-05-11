import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datetoMinutes'
})
export class DatetoMinutesPipe implements PipeTransform {

  transform(value: Date): unknown {
    const date = new Date(value);
    const currentDate = new Date();

    const diffInMs = currentDate.getTime() - date.getTime();
    const diffInMinutes = diffInMs / (1000 * 60);
    const diffInHours = diffInMinutes / 60;
    const hours = Math.floor(diffInHours);

    if (hours <= 0)
      return currentDate.getMinutes() - date.getMinutes() + " mins";
    else if (hours > 24)
      return Math.floor(hours / 24) + " day";
    else
      return Math.floor(hours) + " hours";
  }
}
