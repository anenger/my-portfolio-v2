// Same glyph as src/app/icon.svg, used as a sign-off at the end of posts.
export const EndMark = () => {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="mx-auto mt-14 size-5"
    >
      <rect
        width="64"
        height="64"
        rx="14"
        className="fill-surface stroke-border"
        strokeWidth="3"
      />
      <path
        className="fill-muted"
        d="M23.79 51.17L16.93 51.17L27.84 12.83L36.16 12.83L47.07 51.17L40.21 51.17L32 20.39L23.79 51.17ZM40.37 42.10L23.63 42.10L25.47 36.10L38.53 36.10L40.37 42.10Z"
      />
    </svg>
  );
};
