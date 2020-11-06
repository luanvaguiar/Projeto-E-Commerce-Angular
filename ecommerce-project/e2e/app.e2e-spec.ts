import { EcommerceProjectPage } from './app.po';

describe('ecommerce-project App', function() {
  let page: EcommerceProjectPage;

  beforeEach(() => {
    page = new EcommerceProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
