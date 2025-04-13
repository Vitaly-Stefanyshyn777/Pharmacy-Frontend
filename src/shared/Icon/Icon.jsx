import clsx from 'clsx';
import { icon } from '../../icons';

const Icon = ({ iconId, className, ...restProps }) => {
  return (
    <svg className={clsx(className)} role="img" {...restProps}>
      <use xlinkHref={`${icon}#${iconId}`} />
    </svg>
  );
};

export default Icon;
