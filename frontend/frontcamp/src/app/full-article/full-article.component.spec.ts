import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Article } from '../article.interface';
import { FullArticleComponent } from './full-article.component';

describe('FullArticleComponent', () => {
  let component: FullArticleComponent;
  let fixture: ComponentFixture<FullArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(FullArticleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`Should have article property typed Article`, () => {
    const fixture = TestBed.createComponent(FullArticleComponent);
    const app = fixture.debugElement.componentInstance;
    expect(typeof(app.article)).toEqual('Article');
  });

  it('Should display No Data', () => {
    const fixture = TestBed.createComponent(FullArticleComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.no-data').textContent).toContain('No data. Select Source');
  });

});
