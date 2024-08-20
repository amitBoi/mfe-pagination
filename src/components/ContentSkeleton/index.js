import * as classes from './index.module.css';

export const ContentSkeleton = ({ title, children }) => (
  <div className={classes.wrapper}>
    <h2 className={classes.pageTitle}>{title}</h2>
    {children}
  </div>
);
