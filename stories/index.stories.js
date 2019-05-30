import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../src/index'
import '../styles/style.css'

storiesOf('Button', module)
  .add('Primary Button', () => (
    <Button onClick={action('clicked')} text="text" primary />
  ))
  .add('Danger Button', () => (
    <Button onClick={action('clicked')} text="text" danger />
  ))
  .add('Secondary Button', () => (
    <Button onClick={action('clicked')} text="text" secondary />
  ));