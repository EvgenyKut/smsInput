import { forwardRef } from 'react';

import cn from 'classnames';

import styles from './styles.module.pcss';

type SmsInputElementProps = {
  value: string;
  active?: boolean;
  onClick?: () => void;
};

const SmsInputElement = forwardRef<HTMLInputElement, SmsInputElementProps>((props, ref) => {
  return (
    <input
      ref={ref}
      className={cn(styles.input, props.active && styles.active)}
      onClick={props.onClick}
      type="tel"
      value={props.value}
      pattern={'[0-9]*'}
      inputMode={'numeric'}
      autoComplete={'off'}
      maxLength={1}
      readOnly
    />
  );
});

SmsInputElement.displayName = 'SmsInputElement';

export default SmsInputElement;
