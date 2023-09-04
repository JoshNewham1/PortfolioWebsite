function getAnchor(headerText) {
  return headerText
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, "") // Remove non-alphanumeric characters
    .replace(/[ ]/g, "-"); // Replace spaces with '-'
}

export const MDXH1 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h1 id={anchor} className="group">
      {children}
      <a href={link} className="hidden group-hover:inline ml-2 no-underline">
        🔗
      </a>
    </h1>
  );
};

export const MDXH2 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h2 id={anchor} className="group">
      {children}
      <a href={link} className="hidden group-hover:inline ml-2 no-underline">
        🔗
      </a>
    </h2>
  );
};

export const MDXH3 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h3 id={anchor} className="group">
      {children}
      <a href={link} className="hidden group-hover:inline ml-2 no-underline">
        🔗
      </a>
    </h3>
  );
};

export const MDXH4 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h4 id={anchor} className="group">
      {children}
      <a href={link} className="hidden group-hover:inline ml-2 no-underline">
        🔗
      </a>
    </h4>
  );
};

export const MDXH5 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h5 id={anchor} className="group">
      {children}
      <a href={link} className="hidden group-hover:inline ml-2 no-underline">
        🔗
      </a>
    </h5>
  );
};

export const MDXH6 = ({ children }) => {
  const anchor = getAnchor(children);
  const link = `#${anchor}`;
  return (
    <h6 id={anchor} className="group">
      {children}
      <a href={link} className="hidden group-hover:inline ml-2 no-underline">
        🔗
      </a>
    </h6>
  );
};
