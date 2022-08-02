import { BaseAbpBoilerplateProjectTemplatePage } from './app.po';

describe('BaseAbpBoilerplateProject App', function() {
  let page: BaseAbpBoilerplateProjectTemplatePage;

  beforeEach(() => {
    page = new BaseAbpBoilerplateProjectTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
