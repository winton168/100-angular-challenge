import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-ratings',
  templateUrl: './start-ratings.component.html',
  styleUrls: ['./start-ratings.component.scss']
})
export class StartRatingsComponent implements OnInit {
  @Input() rating = 5;

  constructor() { }

  ngOnInit(): void {
  }

  public get fullStars(): number[] {

    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);

  }

  public get hasHalfStar(): boolean {
    const highestRating = 5;

    const hasHalfStar = (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;

    return hasHalfStar;
  }

  public get emptyStars(): number[] {

    const highestRating = 5;
    const totalEmptyStars = Math.floor( highestRating - this.rating);

    return Array(totalEmptyStars).fill(0);
    
  }




}
