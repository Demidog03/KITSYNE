'use client';

import { ReactNode } from 'react';
import classes from './DialogBubble.module.less';

interface DialogBubbleProps {
  children?: ReactNode;
  position?: 'left' | 'right' | 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
  className?: string;
  variant?: 'dark' | 'light';
}

export default function DialogBubble({
  children,
  position = 'top-left',
  className,
  variant = 'light',
}: DialogBubbleProps) {
  return (
    <div
      className={`${classes.dialogBubble} ${classes[variant]} ${classes[position]} ${className}`}
    >
      {children}
    </div>
  );
}
