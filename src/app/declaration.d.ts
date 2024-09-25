// src/declaration.d.ts
declare module 'aos' {
    const AOS: {
      init: (options?: {
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?: string;
      }) => void;
    };
    export default AOS;
  }
  