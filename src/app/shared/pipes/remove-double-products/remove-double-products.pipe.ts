import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDoubleProducts'
})
export class RemoveDoubleProductsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
