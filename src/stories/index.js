import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import ClosedCard from './CardRelated/ClosedCard';

const ClosedCardStorie = storiesOf('Card Related', module);
ClosedCardStorie.addDecorator(withKnobs);
ClosedCardStorie.add('Closed Card', () => <ClosedCard
  title={text('Title', 'This is the cards title!')}
  />);
