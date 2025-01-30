import { ForwardedRef, forwardRef } from 'react';

interface Props {
  label: string;
  onConfirm: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

// export const MagicButton = forwardRef<HTMLButtonElement, Props>(
export const MagicButton = forwardRef(
  (
    { label, onConfirm, onMouseEnter, onMouseLeave }: Props,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button
        ref={ref}
        onClick={() => onConfirm()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </button>
    );
  },
);
