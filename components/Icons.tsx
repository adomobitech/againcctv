type IconProps = { className?: string };

export function Icon({ name, className = "w-7 h-7" }: { name: string; className?: string }) {
  const props = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };

  switch (name) {
    case "clock":
      return (
        <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
      );
    case "camera":
      return (
        <svg {...props}><rect x="3" y="7" width="14" height="10" rx="2" /><path d="M17 10l4-2v8l-4-2" /></svg>
      );
    case "remote":
      return (
        <svg {...props}><rect x="4" y="4" width="16" height="16" rx="3" /><path d="M8 9h8M8 13h5" /></svg>
      );
    case "gear":
      return (
        <svg {...props}><circle cx="12" cy="12" r="3" /><path d="M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M3 12h2M19 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
      );
    case "cctv":
      return (
        <svg {...props}><path d="M3 6l9-3 9 3" /><rect x="8" y="9" width="12" height="7" rx="1.5" /><path d="M4 21c1-3 4-4 7-4" /></svg>
      );
    case "amc":
      return (
        <svg {...props}><path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.3 2.3-2-2z" /></svg>
      );
    case "doorphone":
    case "doorphone2":
      return (
        <svg {...props}><rect x="7" y="3" width="10" height="18" rx="2" /><circle cx="12" cy="8" r="1.6" /><rect x="9.5" y="12" width="5" height="4" rx="0.5" /></svg>
      );
    case "access":
      return (
        <svg {...props}><rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="9" r="2" /><path d="M9 15h6M9 18h6" /></svg>
      );
    case "biometric":
      return (
        <svg {...props}><path d="M12 3a6 6 0 00-6 6v2c0 4-2 6-2 6h16s-2-2-2-6V9a6 6 0 00-6-6z" /><path d="M9 21a3 3 0 006 0" /></svg>
      );
    case "network":
      return (
        <svg {...props}><circle cx="12" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="M12 7v5M12 12L6 17M12 12l6 5" /></svg>
      );
    case "bullet":
      return (
        <svg {...props}><rect x="3" y="9" width="12" height="6" rx="2" /><path d="M15 10.5l5-2.5v8l-5-2.5" /><path d="M6 15v3M9 15v3" /></svg>
      );
    case "dome":
      return (
        <svg {...props}><path d="M4 15a8 4 0 0116 0z" /><circle cx="12" cy="14.5" r="1.6" /><path d="M2 15h20" /></svg>
      );
    case "ptz":
      return (
        <svg {...props}><circle cx="12" cy="10" r="5" /><circle cx="12" cy="10" r="1.8" /><path d="M7 19h10M9 15l-1 4M15 15l1 4" /></svg>
      );
    case "nvr":
      return (
        <svg {...props}><rect x="3" y="6" width="18" height="12" rx="1.5" /><path d="M6 10h6M6 13h4" /><circle cx="17" cy="15" r="1" /></svg>
      );
    case "keypad":
      return (
        <svg {...props}><rect x="6" y="3" width="12" height="18" rx="2" /><circle cx="9.5" cy="8" r="0.8" /><circle cx="12" cy="8" r="0.8" /><circle cx="14.5" cy="8" r="0.8" /><circle cx="9.5" cy="11" r="0.8" /><circle cx="12" cy="11" r="0.8" /><circle cx="14.5" cy="11" r="0.8" /><rect x="9" y="14.5" width="6" height="2.5" rx="0.5" /></svg>
      );
    case "cable":
      return (
        <svg {...props}><path d="M4 8a4 4 0 018 0v8a4 4 0 008 0" /><circle cx="4" cy="8" r="1" /><circle cx="20" cy="16" r="1" /></svg>
      );
    case "experience":
      return (
        <svg {...props}><path d="M12 2l2.4 5 5.6.5-4.2 3.7 1.3 5.5L12 13.8 6.9 16.7l1.3-5.5L4 7.5 9.6 7z" /></svg>
      );
    case "quality":
      return (
        <svg {...props}><path d="M12 3l2.5 5.3 5.8.5-4.4 3.9 1.3 5.7L12 15.7 6.8 18.4l1.3-5.7L3.7 8.8l5.8-.5z" /></svg>
      );
    case "pricing":
      return (
        <svg {...props}><circle cx="12" cy="12" r="9" /><path d="M9 9h3.5a1.8 1.8 0 010 3.6H10a1.8 1.8 0 000 3.6H15M12 7v2M12 15v2" /></svg>
      );
    case "team":
      return (
        <svg {...props}><circle cx="9" cy="8" r="2.5" /><circle cx="17" cy="9" r="2" /><path d="M3.5 19c.6-3 2.7-4.5 5.5-4.5s4.9 1.5 5.5 4.5M14.5 14.7c2.2.2 4 1.7 4.5 4.3" /></svg>
      );
    case "support":
      return (
        <svg {...props}><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.2" /><path d="M6 6l3 3M18 6l-3 3M6 18l3-3M18 18l-3-3" /></svg>
      );
    case "quote":
      return (
        <svg {...props} strokeWidth={0} fill="currentColor" viewBox="0 0 24 24"><path d="M7 6c-2.8 0-5 2.2-5 5 0 2.5 1.8 4.5 4.2 4.9-.3 1.5-1.2 2.7-2.7 3.6l.7 1.3c2.9-1.1 4.8-3.7 4.8-7.3V6H7zm11 0c-2.8 0-5 2.2-5 5 0 2.5 1.8 4.5 4.2 4.9-.3 1.5-1.2 2.7-2.7 3.6l.7 1.3c2.9-1.1 4.8-3.7 4.8-7.3V6h-2z"/></svg>
      );
    default:
      return null;
  }
}

export function SocialIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const props = { className, fill: "currentColor", viewBox: "0 0 24 24" };
  switch (name) {
    case "facebook":
      return <svg {...props}><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.7V3.7C16.5 3.6 15.5 3.5 14.4 3.5c-2.4 0-4.1 1.5-4.1 4.2v2.2H7.6V13h2.7v8h3.2z" /></svg>;
    case "instagram":
      return <svg {...props}><path d="M12 8.3a3.7 3.7 0 100 7.4 3.7 3.7 0 000-7.4zm0 6.1a2.4 2.4 0 110-4.8 2.4 2.4 0 010 4.8zM16 3H8a5 5 0 00-5 5v8a5 5 0 005 5h8a5 5 0 005-5V8a5 5 0 00-5-5zm3.7 13a3.7 3.7 0 01-3.7 3.7H8A3.7 3.7 0 014.3 16V8A3.7 3.7 0 018 4.3h8A3.7 3.7 0 0119.7 8v8zM16.7 7a.9.9 0 100 1.8.9.9 0 000-1.8z" /></svg>;
    case "youtube":
      return <svg {...props}><path d="M22 12s0-3.2-.4-4.7a2.5 2.5 0 00-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.5A2.5 2.5 0 002.4 7.3C2 8.8 2 12 2 12s0 3.2.4 4.7a2.5 2.5 0 001.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.5a2.5 2.5 0 001.8-1.8C22 15.2 22 12 22 12zM10 15.3V8.7L15.5 12z" /></svg>;
    case "twitter":
      return <svg {...props}><path d="M20 6.4c-.6.3-1.3.5-2 .6a3.5 3.5 0 001.5-1.9c-.7.4-1.4.7-2.2.9a3.4 3.4 0 00-5.9 3.1A9.8 9.8 0 014 5.6a3.4 3.4 0 001 4.6c-.5 0-1-.2-1.5-.4v.1c0 1.7 1.2 3.1 2.8 3.4-.5.1-1 .2-1.5.1.4 1.4 1.7 2.4 3.2 2.4A6.9 6.9 0 012 17.4 9.7 9.7 0 007.3 19c6.4 0 9.9-5.3 9.9-9.9v-.5c.7-.5 1.3-1.1 1.8-1.9z" /></svg>;
    default:
      return null;
  }
}

export function ContactIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const props = { className, fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, viewBox: "0 0 24 24" };
  switch (name) {
    case "pin":
      return <svg {...props}><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="10" r="2.3" /></svg>;
    case "phone":
      return <svg {...props}><path d="M5 4h3l1.5 4L7.5 9.5a12 12 0 007 7L16 14.5l4 1.5v3a2 2 0 01-2.2 2A17 17 0 013 6.2 2 2 0 015 4z" /></svg>;
    case "mail":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>;
    default:
      return null;
  }
}
