import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number, array } from '@storybook/addon-knobs';

import ClosedCard from '../../ClosedCard';

const ClosedCardStorie = storiesOf('Card Related', module).addDecorator(withKnobs);

ClosedCardStorie.add('Closed Card', () => (
  <div>
    <h1>Closed Card</h1>
    <ClosedCard
      title={text('Title', 'This is the cards title!')}
      late={boolean('Late?', true)}
      expired={boolean('Expired?', true)}
      parentCardNames={array('Parent Card Names', ['Parent card name 1', 'Parent card name 2'])}
    />
  </div>
));
