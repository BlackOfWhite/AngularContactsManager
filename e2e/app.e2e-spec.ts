import { A2ContactsManagerPage } from './app.po';

describe('a2-contacts-manager App', function() {
  let page: A2ContactsManagerPage;

  beforeEach(() => {
    page = new A2ContactsManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
