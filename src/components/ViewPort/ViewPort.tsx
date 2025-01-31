import { useViewPort } from '../../hooks/useViewPort';

export const ViewPort = () => {
  const size = useViewPort();

  return (
    <div>
      <p className="dark:text-slate-200">
        X: {size.x}, Y: {size.y}
      </p>
    </div>
  );
};
