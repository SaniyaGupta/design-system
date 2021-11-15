import * as React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../../Button';
import Text from '@/components/atoms/text';

// CSF format story
export const success = () => {
  const disabled = false;
  const expanded = false;
  const loading = false;

  const children = text('children', 'Submit');

  const style = {
    justifyContent: 'space-between',
  };

  return (
    <div className="d-flex w-25" style={style}>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={loading}
          aria-label="Submit form"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Default</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={true}
          loading={loading}
          aria-label="Submit form"
        >
          {children}
        </Button>
        <br />
        <Text weight="strong">Disabled</Text>
      </div>
      <div className="mr-9">
        <Button
          onClick={action('button-clicked')}
          onMouseEnter={action('mouse-enter')}
          onMouseLeave={action('mouse-leave')}
          appearance={'success'}
          size={'regular'}
          expanded={expanded}
          disabled={disabled}
          loading={true}
          aria-label="Loading"
        >
          {''}
        </Button>
        <br />
        <Text weight="strong">Loading</Text>
      </div>
    </div>
  );
};

export default {
  title: 'Components/Button/Variants/State/Success',
  component: Button,
  parameters: {
    docs: {
      docPage: {
        title: 'Button',
        a11yProps: ` 
        **aria-label:** Add \`aria-label='Submit form'\` to describe the action of button 
         `,
      },
    },
  },
};
