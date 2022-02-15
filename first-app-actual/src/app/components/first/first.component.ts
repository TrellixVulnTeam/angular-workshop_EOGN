import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { RandomService } from 'src/app/random.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, AfterViewInit, OnDestroy {
  public title = 'Angular Workshop';
  public isSpecial = false;
  public colors = ['blue', 'red', 'violet'];
  @Input() myInput = '';
  @Output() output = new EventEmitter<string>();

  constructor(private randomService: RandomService) {
    console.log('constructor');
    this.randomService.getString();
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  public getDate(): Date {
    return new Date();
  }

  public getName(lastName: string): string {
    return 'My ' + lastName;
  }

  public addItem(){
    this.randomService.getString().subscribe((randomString) => this.output.emit(randomString.joke));
  }
}
