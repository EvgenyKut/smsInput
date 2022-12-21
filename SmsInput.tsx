import React, { useRef, useState } from 'react';

import SmsInputElement from './SmsInputElement';
import styles from './styles.module.pcss';

type SmsInputProps = {
  count: number;
  onChange?: (value: string) => void;
};

const SmsInput = ({ count, onChange }: SmsInputProps) => {
  const [value, setValue] = useState<string>('');
  const hiddenInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    hiddenInputRef?.current?.focus();
    setTimeout(() => containerRef?.current?.scrollIntoView({ block: 'center' }), 500);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > count) return;
    setValue(event.target.value);
    onChange && onChange(event.target.value);
  };

  const elements = Array.from({ length: count }).map((_, index) => (
    <SmsInputElement
      key={index}
      value={value[index] ?? ''}
      active={index === value.length}
      onClick={handleClick}
    />
  ));

  return (
    <div className={styles.container} ref={containerRef}>
      {elements}
      <input
        ref={hiddenInputRef}
        onChange={handleInputChange}
        name={'otp-confirm'}
        className={styles.hiddenInput}
        pattern={'[0-9]*'}
        inputMode={'numeric'}
        autoComplete={'off'}
        autoFocus
        type="tel"
      />
    </div>
  );
};

export default SmsInput;
