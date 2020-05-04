import { MeditationModel } from "./../models/meditation.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "filterMeditation",
    pure: false
})
export class FilterMeditationPipe implements PipeTransform {

  transform(items: Array<MeditationModel>, filter: string): any {
      if (!items || !filter) {
          return items;
      }
    //   console.log(items);
    //   console.log(filter);

      return items.filter((item) => item.category.includes(filter));
  }

}
