import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article.interface'
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-news-section',
  templateUrl: './news-section.component.html',
  styleUrls: ['./news-section.component.less']
})
export class NewsSectionComponent implements OnInit {
  public newsList: Article[] = [
    {
      urlToImage: 'https://images.wsj.net/im-54509/social',
      title: 'Pence Call to Pressure Tehran Falls on Deaf Ears...',
      description: 'Pence Call to Pressure Tehran Falls on Deaf Ears... (Second column, 11th story, link ) Related stories: Merkel defends Iran deal, multilateralism... USA, Europe rift wide open at security talks... ChinaRussia Team Up to Split America From NATO Allies... Adver…',
      publishedAt: '2019-02-17T15:10:38Z'
    },
    {
      urlToImage: 'https://images.wsj.net/im-54481/social',
      title: 'A $10 Accessory Proves Smartphones Are Too Big',
      description: 'Phones are too big and too hard to hold and use with one hand—and that’s why PopSockets last year sold 60 million PopGrips, a grip that attaches to the back of your giant smartphone.',
      publishedAt: '2019-02-17T14:04:36Z'
    },
    {
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2019/02/GettyImages-1126475976.jpg',
      title: 'VCs aren’t falling in love with dating startups',
      description: 'Coinciding with Valentine’s Day, Crunchbase News took a look at the state of that most awkward of pairings: startups and the pursuit of finding a mate.',
      publishedAt: '2019-02-17T17:09:44Z'
    },
    {
      urlToImage: 'https://si.wsj.net/public/resources/images/OG-CH439_201902_SOC_20190210102917.gif',
      title: 'Forget the 401(k). Let\'s Invent a New Retirement Plan',
      description: 'Article URL: https://www.wsj.com/articles/forget-the-401-k-lets-invent-a-new-retirement-plan-11549854600 Comments URL: https://news.ycombinator.com/item?id=19182516 Points: 3 # Comments: 0',
      publishedAt: '2019-02-17T03:25:26Z'
    },
    {
      urlToImage: 'https://images.wsj.net/im-54507/social',
      title: 'Heather Nauert Withdraws as Trump\'s Pick for U.S. Ambassador to U.N.',
      description: 'Heather Nauert, who was President Trump’s pick to serve as the U.S. ambassador to the United Nations, has withdrawn from consideration, the State Department said.',
      publishedAt: '2019-02-17T03:18:47Z'
    },
    {
      urlToImage: 'http://s.marketwatch.com/public/resources/MWimages/MW-FK975_united_ZG_20170421170059.jpg',
      title: 'Airlines amend ticketing systems to be more accommodating toward transgender passengers',
      description: 'Ticketing with options beyond male or female will help match passenger records with official IDs.',
      publishedAt: '2019-02-16T18:06:40Z'
    },
    {
      urlToImage: 'http://s.marketwatch.com/public/resources/MWimages/MW-HE092_kroll0_ZG_20190216095559.jpg',
      title: 'The tech whiz behind Vine and HQ Trivia made millions in his 20s — and died at 34',
      description: 'Self-taught coder Colin Kroll shot to startup fame, allowing him to live life in a fast lane.',
      publishedAt: '2019-02-16T14:58:37Z'
    },
    {
      urlToImage: 'https://si.wsj.net/public/resources/images/B3-DD821_WORKOU_SOC_20190213172446.jpg',
      title: 'The Fitness Plan for Serious Schmoozers',
      description: 'A county official in Pennsylvania found a way to shake off all those evening events by falling in with a group of early-morning exercisers.',
      publishedAt: '2019-02-16T13:24:11Z'
    },
    {
      urlToImage: 'https://techcrunch.com/wp-content/uploads/2019/02/GettyImages-948478991.jpg',
      title: 'OpenAI built a text generator so good, it\'s considered too dangerous to release',
      description: 'A storm is brewing over a new language model, built by non-profit artificial intelligence research company OpenAI, which it says is so good at generating convincing, well-written text that it’s worried about potential abuse. That’s angered some in the communi…',
      publishedAt: '2019-02-17T17:17:15Z'
    },
    {
      urlToImage: 'https://i.kinja-img.com/gawker-media/image/upload/s--b1kgJsRy--/c_fill,fl_progressive,g_center,h_900,q_80,w_1600/owxwny8ck2h89ilhsnqo.jpg',
      title: 'It Sounds Like It Could Be a While Until We Actually Get Apple\'s Streaming Service',
      description: 'For months, reports have indicated that Apple was poised to give us a glimpse of its long-awaited Netflix competitor sometime this spring. Whether we will soon after have access to what increasingly sounds like an Apple Prime when the tech giant finally revea…',
      publishedAt: '2019-02-16T05:30:00Z'
    }
  ]
  public char: string;
  constructor(private articleService: ArticleService, private apiService: ApiServiceService){}  

  ngOnInit() {
    this.articleService.filterArticleName.subscribe((data: string) => {
      this.char = data;
    })  

    this.articleService.selectedSource.subscribe((id: string) => {
      //this.newsList = data;
      console.log('id', id);
      this.apiService.getArticlesBySource(id).subscribe((list: any) => {
        //console.log('list', list);
        this.newsList = list.articles;
      })
    })
    
  }
}

