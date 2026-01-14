export function TimelineIcon({ kind }: { kind: string }) {
  const cls = "h-5 w-5 text-white/85";
  switch (kind) {
    case "handshake":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M8 12l2 2c1 1 3 1 4 0l3-3c1-1 1-3 0-4l-1-1"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 10l-2 2 6 6 2-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M18 10l2 2-6 6-2-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M12 21s7-5 7-11a7 7 0 10-14 0c0 6 7 11 7 11z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 10a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
        </svg>
      );
    case "gift":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M20 12v8H4v-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M2 8h20v4H2V8z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 20V8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 8c-2 0-4-1-4-3 0-1 1-2 2-2 2 0 2 3 2 5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 8c2 0 4-1 4-3 0-1-1-2-2-2-2 0-2 3-2 5z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "film":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path d="M4 6h16v12H4V6z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 6v12M16 6v12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M10 10l4 2-4 2v-4z" fill="currentColor" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path
            d="M12 22a10 10 0 100-20 10 10 0 000 20z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 7v6l4 2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    case "post":
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls} aria-hidden="true">
          <path d="M4 5h16v14H4V5z" stroke="currentColor" strokeWidth="2" />
          <path
            d="M8 9h8M8 13h5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M15 14l2-2-2-2"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
