import { Pipe, PipeTransform } from '@angular/core';

/** Formats a number as Indian rupees: 12999 -> ₹12,999 */
@Pipe({ name: 'inr' })
export class InrPipe implements PipeTransform {
  private formatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });

  transform(value: number | null | undefined): string {
    if (value === null || value === undefined || isNaN(value)) return '';
    return `₹${this.formatter.format(value)}`;
  }
}
