export const ContentSkeleton = ({ title, children }) => (
  <div className="wrapper">
    <h2 className="page-title">{title}</h2>
    {children}
  </div>
);
