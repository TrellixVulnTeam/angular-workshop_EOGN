import {
  AfterViewInit,
  Component,

  EventEmitter,
  Input,

  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { RandomService } from 'src/app/services/random.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, AfterViewInit, OnDestroy {
  public titleName = 'Angular Workshop';
  public isSpecial = true;
  public colors = ['blue', 'violet', 'green'];
  @Input() myInput = '';
  @Output() newItemEvent = new EventEmitter<string>();
  public newValue = 'value';

  constructor(private randomService: RandomService) {
    console.log('constructor'); // is called when new is invoked
  }

  ngOnInit(): void {
    console.log('ngOnInit'); // Invoked when given component has been  initialized.
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit'); // Invoked when the component’s view has been fully initialized.
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  public getDate(): Date {
    return new Date();
  }

  public addNewItem() {
    this.randomService
      .getRandomString()
      .subscribe((random) => this.newItemEvent.emit(random));
  }
}
