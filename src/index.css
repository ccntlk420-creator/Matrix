@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@200;300;400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap");
@import "tailwindcss";

@theme {
  --font-headline: "Cormorant Garamond", serif;
  --font-body: "Inter", sans-serif;
  --font-label: "Montserrat", sans-serif;

  --color-primary: #e9c176;
  --color-primary-container: #c5a059;
  --color-on-primary: #412d00;
  --color-surface: #131313;
  --color-surface-container-low: #1c1b1b;
  --color-surface-container-high: #2a2a2a;
  --color-surface-container-highest: #353535;
  --color-surface-container-lowest: #0e0e0e;
  --color-on-surface: #e5e2e1;
  --color-on-surface-variant: #d1c5b4;
  --color-outline-variant: #4e4639;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-surface text-on-surface font-body selection:bg-primary selection:text-on-primary antialiased;
  }
}

@layer utilities {
  .gold-gradient {
    background: linear-gradient(135deg, #e9c176 0%, #c5a059 100%);
  }
  .glass-panel {
    background: rgba(53, 53, 53, 0.6);
    backdrop-filter: blur(24px);
  }
  .custom-shadow {
    box-shadow: 0 0 40px 0 rgba(229, 226, 225, 0.06);
  }
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
}
