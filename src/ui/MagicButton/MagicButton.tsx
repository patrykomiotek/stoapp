import { forwardRef } from 'react';

interface Props {
  label: string;
  onConfirm: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const MagicButton = forwardRef<HTMLButtonElement, Props>(
  ({ label, onConfirm, onMouseEnter, onMouseLeave }, ref) => {
    return (
      <div>
        <button
          ref={ref}
          onClick={() => onConfirm()}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {label}
        </button>
      </div>
    );
  },
);
