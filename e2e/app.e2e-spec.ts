import { ArulIllamPage } from './app.po';

describe('arul-illam App', function() {
  let page: ArulIllamPage;

  beforeEach(() => {
    page = new ArulIllamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
