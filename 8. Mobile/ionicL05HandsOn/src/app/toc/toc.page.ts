import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toc',
  templateUrl: './toc.page.html',
  styleUrls: ['./toc.page.scss'],
})
export class TocPage implements OnInit {
  public chapters = [
    {
      title: "1. Intro ",
      url: "/chapter1"
    },
    {
      title: "2. Shoya Ishida",
      url: "/chapter2"
    },
    {
      title: "3. First Impressions",
      url: "/chapter3"
    },
    {
      title: "4. Awkward",
      url: "/chapter4"
    },
    {
      title: "5. The Feels",
      url: "/chapter5"
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
