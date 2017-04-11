import { SearchWithMapPage } from './app.po';

describe('search-with-map App', () => {
  let page: SearchWithMapPage;

  beforeEach(() => {
    page = new SearchWithMapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
