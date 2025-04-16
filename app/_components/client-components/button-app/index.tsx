import React, {FC} from 'react';

type ButtonAppProps = {
  className?: string,
  id?:string,
  variant?: string,
  'aria-label'?: string,
  'aria-labelledby'?: string,
  title?: string,
  uppercase?: boolean,
  rounded?: boolean,
  toggledrawerevent?: 'true' | 'false'
  children?: any
  href?: string
  size?:string
  full?: boolean
  style?: any
}

export const ButtonApp: FC<ButtonAppProps> = (props) => {
  const {uppercase = false, rounded = false} = props;
  const attrs = {...props, rounded: '', uppercase: '', full: ''};
  const style = {
    textTransform: uppercase ? 'uppercase' : 'unset',
    borderRadius: rounded ? '25px' : '0px',
    boxShadow: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    fontSize: '0.9375rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    padding: '6px 16px',
    cursor: 'pointer',
    width: !props.full ? 'auto' : '100%',
  } as React.CSSProperties;
  return props?.toggledrawerevent === 'true' && (!props.href || props.href !== '') ? <label
    {...attrs}
    style={style}
    htmlFor={props?.toggledrawerevent === 'true' ? 'side-bar-state' : ''}
  /> :
    <a
      {...attrs}
      style={style}
    />;
};
