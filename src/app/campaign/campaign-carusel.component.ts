import { Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Campaign } from './campaign.model';

@Component({
  selector: 'app-campaign-carusel',
  templateUrl: './campaign-carusel.component.html',
  styleUrls: ['./campaign-carusel.component.css']
})
export class CampaignCaruselComponent implements OnInit {
  campaigns: Campaign[] = [
    {
      imageUrl: '/assets/campaign1.png',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here',
      color: '13, 100, 155'
    },
    {
      imageUrl: '/assets/campaign2.png',
      title: 'Coming Soon',
      description: 'retrieve 300% bet amount as real money only here',
      color: '239, 84, 28'
    },
    {
      imageUrl: '/assets/campaign3.png',
      title: 'Win a Jackpot',
      description: 'retrieve 300% bet amount as real money only here',
      color: '26, 23, 108'
    },
    {
      imageUrl: '/assets/campaign1.png',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here',
      color: '13, 100, 155'
    },
    {
      imageUrl: '/assets/campaign2.png',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here',
      color: '239, 84, 28'
    },
    {
      imageUrl: '/assets/campaign3.png',
      title: 'Win a Jackpot',
      description: 'retrieve 300% bet amount as real money only here',
      color: '26, 23, 108'
    }
  ];

  @ViewChild('slider', { static: true }) sliderRef: ElementRef | undefined;

  isDown = false;
  startX: number = 0;
  scrollLeft: number = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  onMouseDown(event: MouseEvent) {
    const slider = this.sliderRef?.nativeElement;
    this.isDown = true;
    this.renderer.removeClass(slider, 'active');
    this.startX = event.pageX - slider.offsetLeft;
    this.scrollLeft = slider.scrollLeft;
  }

  onMouseLeave() {
    const slider = this.sliderRef?.nativeElement;
    this.isDown = false;
    this.renderer.removeClass(slider, 'active');
  }

  onMouseUp() {
    const slider = this.sliderRef?.nativeElement;
    this.isDown = false;
    this.renderer.removeClass(slider, 'active');
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDown) {
      event.preventDefault();
      const slider = this.sliderRef?.nativeElement;
      const x = event.pageX - slider.offsetLeft;
      const walk = x - this.startX;
      this.renderer.setProperty(slider, 'scrollLeft', this.scrollLeft - walk);
    }
  }
}
