import { element } from 'protractor';
import { HighlightDirective } from './highlight.directive';

describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // Necesario para cuando agregamos parámetros
    const elementRefMock = {
      nativeElement: document.createElement('div')
    };
    const directive = new HighlightDirective(elementRefMock);
    expect(directive).toBeTruthy();
  });
});
