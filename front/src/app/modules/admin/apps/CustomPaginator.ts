import { Injector } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { TranslocoService} from '@ngneat/transloco';
export class PaginatorI18n {
  constructor(private readonly transloco: TranslocoService) {}

    getPaginatorIntl(): MatPaginatorIntl {
      const customPaginatorIntl = new MatPaginatorIntl();


      customPaginatorIntl.itemsPerPageLabel = 'Items por página';
      customPaginatorIntl.firstPageLabel = 'Primera página';
      customPaginatorIntl.lastPageLabel = 'Última página';
      customPaginatorIntl.nextPageLabel = 'Siguiente';
      customPaginatorIntl.previousPageLabel = 'Anterior';
      customPaginatorIntl.getRangeLabel = (page: number = 0, pageSize: number = 0, length: number = 0) => {
        const start = page * pageSize + 1;
        var end = (page + 1) * pageSize;
        if (end > length){
            end = length
        }
        return `${start} - ${end} de ${length}`;
      };
  
      return customPaginatorIntl;
    }
   
  
}