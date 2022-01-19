import { expect, fixture, html } from '@open-wc/testing';
// import sinon from 'sinon';

//import type SlCollapse from './collapse';

describe('<sl-collapse>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-collapse></sl-collapse> `);

    expect(el).to.exist;
  });
});
