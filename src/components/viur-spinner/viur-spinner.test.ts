import { expect, fixture, html, waitUntil } from '@open-wc/testing';
// import sinon from 'sinon';

import '../../../dist/shoelace.js';
import type SlViurSpinner from './viur-spinner';

describe('<sl-viur-spinner>', () => {
  it('should render a component', async () => {
    const el = await fixture(html` <sl-viur-spinner></sl-viur-spinner> `);

    expect(el).to.exist;
  });
});
