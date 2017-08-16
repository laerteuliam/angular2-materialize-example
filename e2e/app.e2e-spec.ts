import { PrjMaterializePage } from './app.po';

describe('prj-materialize App', () => {
  let page: PrjMaterializePage;

  beforeEach(() => {
    page = new PrjMaterializePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
