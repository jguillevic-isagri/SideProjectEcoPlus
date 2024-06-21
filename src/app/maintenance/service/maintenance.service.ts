import { Injectable, signal } from '@angular/core';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';
import { Developper } from '../entity/developper';
import { Week, WeekDto } from '../entity/week';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  constructor() { }

    selectedDevelopperId = signal<number | undefined>(undefined);

    public getDeveloppers() : Observable<Developper[]>{
      const devs : Developper[] = [];
      devs.push( {id : 1, name : 'Langlet', firstName : 'Christopher'})
      devs.push( {id : 2, name : 'Roucous', firstName : 'Alice'})
      devs.push( {id : 3, name : 'Prandi', firstName : 'Pierre'})
      devs.push( {id : 4, name : 'Guillevic', firstName : 'Jérôme'})

      return of(devs);
    }

    getDeveloperById(id: number) : Observable<Developper> {
      let devs : Developper[] = [];
      this.getDeveloppers().subscribe(item => devs = item);

      let dev = devs.find((item) => item.id == id) || devs[0];

      return of(dev);
    }

    getWeeks(): Observable<Week[]> {
      return this.getWeeksDto().pipe(
        switchMap(weekDtos => {
          const weekObservables = weekDtos.map(weekDto => {
            return this.getDeveloperById(weekDto.developperId).pipe(
              map(developer => {
                const mondayDate = new Date(weekDto.mondayDate);
                const sundayDate = new Date(mondayDate);
                sundayDate.setDate(mondayDate.getDate() + 6);
                return {
                  developperId: weekDto.developperId,
                  developperFirstName: developer.firstName,
                  developperName: developer.name,
                  mondayDate: mondayDate,
                  sundayDate: sundayDate
                } as Week;
              })
            );
          });
  
          return forkJoin(weekObservables);
        })
      );
    }

    private getWeeksDto() : Observable<WeekDto[]>{
      const weeks : WeekDto[] = [];

      const firstDate = new Date(2024,6,17);

      for (let i = 0; i < 100; i++){
        let nextDate = new Date();
        nextDate.setDate(firstDate.getDate() + i * 7);
        weeks.push( {developperId : i % 4 + 1, mondayDate : nextDate});
      }  

      return of(weeks);
    }

}
