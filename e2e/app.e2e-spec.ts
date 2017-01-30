import { ApiChallengeAngularPage } from './app.po';

describe('api-challenge-angular App', function() {
  let page: ApiChallengeAngularPage;

  beforeEach(() => {
    page = new ApiChallengeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
