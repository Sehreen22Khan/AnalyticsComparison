import { ComponentFixture, TestBed } from '@angular/core/testing';
import { acquireChart } from 'chartjs-test-utils';

import { ChartsComponent } from './charts.component';

describe('ChartsComponent', () => {
  let component: ChartsComponent;
  let fixture: ComponentFixture<ChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Chart Labels Test', () =>{
      const fixture = TestBed.createComponent(ChartsComponent);
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('.content span')?.textContent).toContain('analytics app is running!');
  });
  
  it('should be constructed', function() {
    var chart = acquireChart({
      type: 'bar',
      data: {
        datasets: [
          {data: []},
          {data: []}
        ],
        labels: []
      }
    });

    var meta = chart.getDatasetMeta(1);
    expect(meta.type).toEqual('bar');
    expect(meta.data).toEqual([]);
    expect(meta.hidden).toBe(null);
    expect(meta.controller).not.toBe(undefined);
    expect(meta.controller.index).toBe(1);
    expect(meta.xAxisID).not.toBe(null);
    expect(meta.yAxisID).not.toBe(null);

    meta.controller.updateIndex(0);
    expect(meta.controller.index).toBe(0);
  });
});
