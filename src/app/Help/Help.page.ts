import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: 'Help.page.html',
  styleUrls: ['Help.page.scss']
})
export class HelpPage {
  
  @ViewChild('tabHeader', { static: false }) tabHeader!: ElementRef;
  constructor() {}
  selectedTab: string = 'trekRoute'; // Initialize with default value

  selectedSegment = 'Trip Route';
  handleRefresh(event: any) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }


  tabs = [
    {
      title: 'Trip Route',
      content: [
        {
          cardTitle: 'Boarding Points',
          cardSubTitle: 'From Destination',
        },
      ],
    },
    {
      title: 'Iternary',
      content: [
        {
          cardTitle: 'Day 1 Activity',
          description: 'Visit to the first campsite, trekking activities.',
        },
        {
          cardTitle: 'Day 2 Activity',
          description: 'Exploring the mountain, outdoor activites.',
        },
        {
          cardTitle: 'Day 3 Activity',
          description: 'Return trek and campsite.',
        },
      ],
    },
    {
      title: 'Amenities',
      content: 'Amenities content',
    },
    {
      title: 'Reviews',
      content: 'Reviews content',
    },
    {
      title: 'Resorts',
      content: 'Resorts content',
    },
    {
      title: 'Activities',
      content: 'Activities content',
    },
    {
      title: 'Cancel Policy',
      content: 'Cancel Policy content',
    },
    {
      title: 'Others',
      content: 'Others content',
    },
  ];
  images = [
    {
      name: 'Trekking1',
      img: 'assets/images/trek1.jpeg',
    },
    {
      name: 'Trekking2',
      img: 'assets/images/trek2.jpg',
    },
    {
      name: 'Trekking1',
      img: 'assets/images/trek1.jpeg',
    },
    {
      name: 'Trekking2',
      img: 'assets/images/trek2.jpg',
    },
  ];
  
  onScroll(event: any) {
    const scrollTop = event.detail.scrollTop;
    const tabOffsetTop = this.tabHeader.nativeElement.offsetTop;

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
      const { offsetTop, clientHeight } = section as HTMLElement;
      if (scrollTop + tabOffsetTop >= offsetTop && scrollTop + tabOffsetTop < offsetTop + clientHeight) {
        this.selectedTab = section.id; // Update selected tab based on visible section
      }
    });
  }

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      this.selectedTab = sectionId; // Update selected tab when clicking on segment
    }
  }
}
