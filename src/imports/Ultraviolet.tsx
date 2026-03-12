import svgPaths from "./svg-pitvnxg9t7";
import imgImage from "figma:asset/78910f6b8da2fae814ad01b50598deabd01426f9.png";
import imgAvatar from "figma:asset/50e2bbc23961dfb1fb031d40ddc0d9f18d6f6392.png";

function Favicon() {
  return (
    <div className="absolute inset-[-16.67%]" data-name="favicon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="favicon">
          <g id="Vector 3">
            <path d={svgPaths.p1b7acd70} fill="var(--fill-0, #09090B)" />
            <path d="M15 20V18L28 5V7L15 20Z" fill="var(--fill-0, #09090B)" />
            <path d="M15 24V22L28 9V11L15 24Z" fill="var(--fill-0, #09090B)" />
            <path d="M15 28V26L20 21V23L15 28Z" fill="var(--fill-0, #09090B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="icon">
      <Favicon />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-[116px]" data-name="Name">
      <Icon />
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[18px] text-center">
        <p className="css-ew64yg leading-[28px]">Launch UI</p>
      </div>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="MenuItem">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Getting started</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="chevron-down">
          <path d="M3 4.5L6 7.5L9 4.5" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="MenuItem">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Components</p>
      </div>
      <ChevronDown1 />
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="MenuItem">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Documentation</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Name />
      <MenuItem />
      <MenuItem1 />
      <MenuItem2 />
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Sign in</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <a className="bg-gradient-to-b content-stretch cursor-pointer flex from-[#18181b] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 to-[rgba(9,9,11,0.8)]" data-name="Button" href="https://www.mikolajdobrucki.com/jupiter?ref=figma">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-left" role="link" tabIndex="0">
        <p className="css-ew64yg cursor-pointer leading-[20px]">Get started</p>
      </div>
    </a>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0">
      <Button />
      <Button1 />
    </div>
  );
}

function NavbarDefault() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Navbar / Default">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[32px] py-[16px] relative w-full">
          <Frame1 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="arrow-right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="arrow-right">
          <path d={svgPaths.pafaf080} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame30() {
  return (
    <a className="content-stretch cursor-pointer flex gap-[4px] items-center relative shrink-0" href="https://www.mikolajdobrucki.com/jupiter?ref=figma">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[12px] text-left" role="link" tabIndex="0">
        <p className="css-ew64yg cursor-pointer leading-[16px]">Read more</p>
      </div>
      <ArrowRight />
    </a>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[10px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px]">
        <p className="css-ew64yg leading-[16px]">New version of Launch UI is out!</p>
      </div>
      <Frame30 />
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#18181b] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 to-[rgba(9,9,11,0.8)]" data-name="Button">
      <a className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px]" href="https://www.launchuicomponents.com/#subscribe">
        <p className="css-ew64yg cursor-pointer leading-[20px]">Get started</p>
      </a>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gradient-to-t content-stretch flex from-[rgba(9,9,11,0.05)] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 to-[rgba(9,9,11,0.1)]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <a className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]" href="https://github.com/launch-ui/launch-ui">
        <p className="css-ew64yg cursor-pointer leading-[20px]">Github</p>
      </a>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button2 />
      <Button3 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center relative shrink-0 w-full z-[2]" data-name="content">
      <Badge />
      <p className="bg-clip-text css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[96px] text-center text-shadow-[0px_25px_50px_rgba(0,0,0,0.25)] w-[1248px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(110.276deg, rgb(9, 9, 11) 24.451%, rgb(113, 113, 122) 73.781%)" }}>
        Give your big idea the website it deserves
      </p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#71717a] text-[20px] text-center w-[544px]">Landing page kit template with React, Shadcn/ui and Tailwind that you can copy/paste into your project.</p>
      <Frame31 />
    </div>
  );
}

function Glows() {
  return (
    <div className="absolute h-[1069px] left-[-217px] right-[-248px] top-[-285px]" data-name="glows">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1713 1069">
        <g clipPath="url(#clip0_1_7574)" id="glows">
          <g filter="url(#filter0_f_1_7574)" id="Ellipse 1">
            <ellipse cx="856.5" cy="442.5" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" rx="481.5" ry="144.5" />
          </g>
          <g filter="url(#filter1_f_1_7574)" id="Ellipse 2">
            <ellipse cx="856.5" cy="377" fill="var(--fill-0, #A78BFA)" rx="481.5" ry="74" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="913" id="filter0_f_1_7574" width="1587" x="63" y="-14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7574" stdDeviation="156" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="276" id="filter1_f_1_7574" width="1091" x="311" y="239">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7574" stdDeviation="32" />
          </filter>
          <clipPath id="clip0_1_7574">
            <rect fill="white" height="1069" width="1713" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[rgba(9,9,11,0.05)] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] right-0 rounded-[16px] top-0" data-name="frame">
      <div className="aspect-[1232/753] pointer-events-none relative rounded-[8px] shrink-0 w-full" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[100.21%] left-[-0.08%] max-w-none top-[-0.1%] w-[100.16%]" src={imgImage} />
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function IllustrationMockup() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[12px] w-full z-[1]" data-name="Illustration / Mockup">
      <Glows />
      <Frame />
      <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0)] inset-0 to-[85.5%] to-[rgba(255,255,255,0.9)]" data-name="fade" />
    </div>
  );
}

function HeroDefault() {
  return (
    <div className="bg-white h-[1393px] max-w-[1312px] relative shrink-0 w-full" data-name="Hero / Default">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[96px] isolate items-center max-w-[inherit] pt-[80px] px-[32px] relative size-full">
          <Content />
          <IllustrationMockup />
        </div>
      </div>
    </div>
  );
}

function Figma() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="figma">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="figma">
          <path d={svgPaths.pf163800} id="path" stroke="var(--stroke-0, #09090B)" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Figma />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Figma</p>
      </div>
    </div>
  );
}

function React() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="react">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="react">
          <path d={svgPaths.p1da01d80} fill="var(--fill-0, #09090B)" id="Vector" />
          <path d={svgPaths.p184b9900} id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeWidth="1.5" />
          <path d={svgPaths.p2fe93b00} id="Vector_3" stroke="var(--stroke-0, #09090B)" strokeWidth="1.5" />
          <path d={svgPaths.p36c23671} id="Vector_4" stroke="var(--stroke-0, #09090B)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Logo1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <React />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">React.js</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px]">
        <p className="css-ew64yg leading-[20px]">18.3.1</p>
      </div>
    </div>
  );
}

function Typescript() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="typescript">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="typescript">
          <path clipRule="evenodd" d={svgPaths.p5b6d280} fill="var(--fill-0, #09090B)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Typescript />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Typescript</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px]">
        <p className="css-ew64yg leading-[20px]">5.6.2</p>
      </div>
    </div>
  );
}

function Shadcn() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="shadcn">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="shadcn">
          <path d="M19.5 12L12 19.5" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M18 3.75L3.75 18" id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Logo3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Shadcn />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Shadcn</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px]">
        <p className="css-ew64yg leading-[20px]">2.0.7</p>
      </div>
    </div>
  );
}

function Tailwind() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="tailwind">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="tailwind">
          <path d={svgPaths.p2ac92200} fill="var(--fill-0, #09090B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Logo">
      <Tailwind />
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Tailwind CSS</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[14px]">
        <p className="css-ew64yg leading-[20px]">3.4.11</p>
      </div>
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-center flex flex-wrap gap-[24px_48px] items-center justify-center relative shrink-0 w-full">
      <Logo />
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
    </div>
  );
}

function Logos() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Logos">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[inherit] px-[32px] py-[80px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px] text-center">
            <p className="css-ew64yg leading-[20px]">Built with the best tools</p>
          </div>
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] not-italic relative shrink-0 w-full" data-name="text">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#09090b] text-[24px] w-[min-content]">100+ sections and components</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">All the elements you need t build a modern, responsive, and accessible landing page.</p>
    </div>
  );
}

function Glows1() {
  return (
    <div className="absolute left-[calc(50%-36px)] size-[360px] top-[calc(50%+79px)] translate-x-[-50%] translate-y-[-50%]" data-name="glows">
      <div className="absolute inset-[-111.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1160 1160">
          <g id="glows" opacity="0.5">
            <g filter="url(#filter0_f_1_7526)" id="Ellipse 1" opacity="0.7">
              <circle cx="180" cy="180" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" r="180" transform="matrix(-1 0 0 1 760 400)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1160" id="filter0_f_1_7526" width="1160" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7526" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IllustrationGlobe() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Illustration/Globe">
      <Glows1 />
      <div className="absolute flex items-center justify-center left-[calc(50%-35.5px)] size-[353px] top-[calc(50%+79.5px)] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex-none scale-y-[-100%]">
          <div className="relative size-[353px]" data-name="globe">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 353 353">
              <path d={svgPaths.p174acaf1} fill="url(#paint0_linear_1_7521)" id="globe" />
              <defs>
                <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7521" x1="176.5" x2="176.5" y1="353" y2="0">
                  <stop stopColor="#A78BFA" stopOpacity="0.8" />
                  <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%-36px)] size-[512px] top-[calc(50%+79px)] translate-x-[-50%] translate-y-[-50%]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-45deg]">
          <div className="h-[486.669px] relative w-[237.408px]" data-name="ellipse 1">
            <div className="absolute inset-[-1.85%_-3.79%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255.408 504.669">
                <g filter="url(#filter0_d_1_7516)" id="ellipse 1">
                  <ellipse cx="127.704" cy="252.335" rx="118.704" ry="243.335" shapeRendering="crispEdges" stroke="url(#paint0_linear_1_7516)" strokeWidth="2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="504.669" id="filter0_d_1_7516" width="255.408" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7516" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7516" mode="normal" result="shape" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7516" x1="193.112" x2="58.7613" y1="70.9616" y2="132.48">
                    <stop stopColor="#09090B" />
                    <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[279.143px] items-center justify-center left-[calc(50%-28.06px)] top-[calc(50%+114.1px)] translate-x-[-50%] translate-y-[-50%] w-[462.406px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[-105deg]">
          <div className="h-[432.323px] relative w-[173.15px]" data-name="ellipse 2">
            <div className="absolute inset-[-2.08%_-5.2%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 191.15 450.323">
                <g filter="url(#filter0_d_1_7509)" id="ellipse 2">
                  <ellipse cx="95.5749" cy="225.161" rx="86.5749" ry="216.161" shapeRendering="crispEdges" stroke="url(#paint0_linear_1_7509)" strokeWidth="2" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="450.323" id="filter0_d_1_7509" width="191.15" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7509" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_7509" mode="normal" result="shape" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7509" x1="177.122" x2="40.7183" y1="133.71" y2="121.954">
                    <stop stopColor="#09090B" stopOpacity="0.7" />
                    <stop offset="0.395" stopColor="#A78BFA" stopOpacity="0.1" />
                    <stop offset="1" stopColor="#A78BFA" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Illustration() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[128px] relative w-full" data-name="illustration">
      <IllustrationGlobe />
    </div>
  );
}

function Tile() {
  return (
    <div className="bg-white h-full min-w-[360px] relative rounded-[12px] shrink-0 w-[560px]" data-name="Tile">
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Text />
        <Illustration />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] not-italic relative shrink-0 w-full" data-name="text">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#09090b] text-[24px] w-[min-content]">You’re in control</p>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">{`This is not a component library. It's a collection of re-usable components that you can copy and paste into your apps.`}</p>
    </div>
  );
}

function Glows2() {
  return (
    <div className="absolute left-[calc(50%-56px)] size-[360px] top-[calc(50%+120px)] translate-x-[-50%] translate-y-[-50%]" data-name="glows">
      <div className="absolute inset-[-95%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1044 1044">
          <g id="glows">
            <g filter="url(#filter0_f_1_7552)" id="Ellipse 1" opacity="0.7">
              <circle cx="122" cy="122" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" r="122" transform="matrix(-1 0 0 1 644 400)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1044" id="filter0_f_1_7552" width="1044" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7552" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Favicon1() {
  return (
    <div className="absolute inset-[-6.25%_-27.08%_-27.08%_-6.25%]" data-name="favicon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85.3333 85.3333">
        <g id="favicon">
          <g id="Vector 3">
            <path d={svgPaths.p1b7acd70} fill="var(--fill-0, #09090B)" />
            <path d="M15 20V18L28 5V7L15 20Z" fill="var(--fill-0, #09090B)" />
            <path d="M15 24V22L28 9V11L15 24Z" fill="var(--fill-0, #09090B)" />
            <path d="M15 28V26L20 21V23L15 28Z" fill="var(--fill-0, #09090B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[4px]" data-name="icon">
      <Favicon1 />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shadow-[0px_0px_8px_0px_rgba(167,139,250,0.8),0px_0px_64px_0px_#4f46e5] shrink-0 size-[64px]" data-name="Name">
      <Icon1 />
    </div>
  );
}

function Frame108() {
  return (
    <div className="bg-gradient-to-t content-stretch flex flex-[1_0_0] from-[rgba(9,9,11,0.05)] items-center justify-center min-h-px min-w-px relative rounded-[9999px] to-[rgba(9,9,11,0.2)] w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-[-1px] pointer-events-none rounded-[10000px]" />
      <Name1 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(79,70,229,0.6)] min-h-px min-w-px relative rounded-[9999px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] to-[rgba(79,70,229,0.1)] w-full">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative size-full">
          <Frame108 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame15 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame14 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.5)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame12 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.4)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame11 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.3)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame9 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame8() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame33 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative rounded-[9999px] w-full">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[9999px]">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] h-full min-h-px min-w-px relative rounded-[9999px]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute left-[calc(50%-56px)] rounded-[9999px] size-[356px] top-[calc(50%+120px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="content-stretch flex items-center overflow-clip p-[8px] relative rounded-[inherit] size-full">
        <Frame5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.05)] border-solid inset-0 pointer-events-none rounded-[9999px]" />
    </div>
  );
}

function IllustrationRipple() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Illustration/Ripple">
      <Glows2 />
      <Frame4 />
    </div>
  );
}

function Illustration1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px pt-[64px] relative w-full" data-name="illustration">
      <IllustrationRipple />
    </div>
  );
}

function Tile1() {
  return (
    <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-[360px] relative rounded-[12px]" data-name="Tile">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] p-[24px] relative size-full">
          <Text1 />
          <Illustration1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-wrap gap-[16px] h-[496px] items-center relative shrink-0 w-full">
      <Tile />
      <Tile1 />
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] not-italic relative shrink-0 w-full" data-name="text">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#09090b] text-[24px] w-[min-content]">Fits right into your stack</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">
        <p className="css-4hzbpn mb-[8px]">Built with modern web technologies and tools that fit right into any React project.</p>
        <p className="css-4hzbpn">No bloat, no extra dependencies, no risk of conflicts.</p>
      </div>
    </div>
  );
}

function Glows3() {
  return (
    <div className="absolute left-[calc(50%-56px)] size-[360px] top-[calc(50%+72px)] translate-x-[-50%] translate-y-[-50%]" data-name="glows">
      <div className="absolute inset-[-111.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1160 1160">
          <g id="glows" opacity="0.5">
            <g filter="url(#filter0_f_1_7504)" id="Ellipse 1">
              <circle cx="180" cy="180" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" r="180" transform="matrix(-1 0 0 1 760 400)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1160" id="filter0_f_1_7504" width="1160" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7504" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame24() {
  return <div className="absolute bg-gradient-to-l from-[rgba(255,255,255,0.3)] left-[calc(50%-280px)] rounded-[12px] size-[84px] to-[rgba(255,255,255,0)] top-[calc(50%+119px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function React1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="react">
      <div className="absolute inset-[-259.26%_-263.44%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150.452 148.447">
          <g filter="url(#filter0_dddd_1_7566)" id="react">
            <path d={svgPaths.p25da4600} fill="var(--fill-0, #09090B)" id="Vector" />
            <path d={svgPaths.p32f36c00} id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeWidth="1.5" />
            <path d={svgPaths.p2786b000} id="Vector_3" stroke="var(--stroke-0, #09090B)" strokeWidth="1.5" />
            <path d={svgPaths.p2fc7ec00} id="Vector_4" stroke="var(--stroke-0, #09090B)" strokeWidth="1.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="152" id="filter0_dddd_1_7566" width="152" x="-0.773811" y="-1.77648">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="32" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7566" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="24" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect1_dropShadow_1_7566" mode="normal" result="effect2_dropShadow_1_7566" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="16" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect2_dropShadow_1_7566" mode="normal" result="effect3_dropShadow_1_7566" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
              <feBlend in2="effect3_dropShadow_1_7566" mode="normal" result="effect4_dropShadow_1_7566" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_7566" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0)] left-[calc(50%+44px)] rounded-[12px] size-[84px] to-[rgba(9,9,11,0.05)] top-[calc(50%+64px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <React1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.2)] border-solid inset-[-4px] pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame23() {
  return <div className="absolute bg-gradient-to-t from-[rgba(255,255,255,0.3)] left-[calc(50%+44px)] rounded-[12px] size-[84px] to-[rgba(255,255,255,0)] top-[calc(50%-44px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function Tailwind1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="tailwind">
      <div className="absolute inset-[-245.83%_-262.5%_-250%_-262.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 143">
          <g filter="url(#filter0_dddd_1_7490)" id="tailwind">
            <path d={svgPaths.p2d3ad00} fill="var(--fill-0, #09090B)" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="152" id="filter0_dddd_1_7490" width="152" x="-1" y="-5">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="32" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7490" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="24" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect1_dropShadow_1_7490" mode="normal" result="effect2_dropShadow_1_7490" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="16" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect2_dropShadow_1_7490" mode="normal" result="effect3_dropShadow_1_7490" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
              <feBlend in2="effect3_dropShadow_1_7490" mode="normal" result="effect4_dropShadow_1_7490" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_7490" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0)] left-[calc(50%-172px)] rounded-[12px] size-[84px] to-[rgba(9,9,11,0.05)] top-[calc(50%+64px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Tailwind1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.2)] border-solid inset-[-4px] pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Frame20() {
  return <div className="absolute bg-gradient-to-t from-[rgba(255,255,255,0.3)] left-[calc(50%-172px)] rounded-[12px] size-[84px] to-[rgba(255,255,255,0)] top-[calc(50%-44px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function Frame35() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.3)] left-[calc(50%-172px)] rounded-[12px] size-[84px] to-[rgba(255,255,255,0)] top-[calc(50%+172px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function Frame21() {
  return <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.3)] left-[calc(50%+44px)] rounded-[12px] size-[84px] to-[rgba(255,255,255,0)] top-[calc(50%+172px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function Frame25() {
  return <div className="absolute bg-gradient-to-r from-[rgba(255,255,255,0.3)] left-[calc(50%+152px)] rounded-[12px] size-[84px] to-[rgba(255,255,255,0)] top-[calc(50%+118px)] translate-x-[-50%] translate-y-[-50%]" />;
}

function Typescript1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="typescript">
      <div className="absolute inset-[-262.5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
          <g filter="url(#filter0_dddd_1_7484)" id="typescript">
            <path clipRule="evenodd" d={svgPaths.p332bcc80} fill="var(--fill-0, #09090B)" fillRule="evenodd" id="Vector" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="152" id="filter0_dddd_1_7484" width="152" x="-1.00001" y="-1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="32" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7484" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="24" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect1_dropShadow_1_7484" mode="normal" result="effect2_dropShadow_1_7484" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="16" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect2_dropShadow_1_7484" mode="normal" result="effect3_dropShadow_1_7484" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
              <feBlend in2="effect3_dropShadow_1_7484" mode="normal" result="effect4_dropShadow_1_7484" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_7484" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0)] left-[calc(50%+152px)] rounded-[12px] size-[84px] to-[rgba(9,9,11,0.05)] top-[calc(50%+10px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Typescript1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.2)] border-solid inset-[-4px] pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Figma1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="figma">
      <div className="absolute inset-[-262.5%_-250%_-266.67%_-250%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 151">
          <g filter="url(#filter0_dddd_1_7563)" id="figma">
            <path d={svgPaths.pd537900} id="path" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="152" id="filter0_dddd_1_7563" width="152" x="-4" y="-1">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="32" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7563" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="24" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect1_dropShadow_1_7563" mode="normal" result="effect2_dropShadow_1_7563" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="16" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect2_dropShadow_1_7563" mode="normal" result="effect3_dropShadow_1_7563" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
              <feBlend in2="effect3_dropShadow_1_7563" mode="normal" result="effect4_dropShadow_1_7563" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_7563" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0)] left-[calc(50%-64px)] rounded-[12px] size-[84px] to-[rgba(9,9,11,0.05)] top-[calc(50%+10px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Figma1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.2)] border-solid inset-[-4px] pointer-events-none rounded-[16px]" />
    </div>
  );
}

function Shadcn1() {
  return (
    <div className="absolute left-1/2 size-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="shadcn">
      <div className="absolute inset-[-254.17%_-251.04%_-251.04%_-254.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 145.25 145.25">
          <g filter="url(#filter0_dddd_1_7480)" id="shadcn">
            <path d="M80.5 73L73 80.5" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            <path d="M79 64.75L64.75 79" id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="152" id="filter0_dddd_1_7480" width="152" x="-3" y="-3">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="32" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7480" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="24" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect1_dropShadow_1_7480" mode="normal" result="effect2_dropShadow_1_7480" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="16" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
              <feBlend in2="effect2_dropShadow_1_7480" mode="normal" result="effect3_dropShadow_1_7480" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
              <feBlend in2="effect3_dropShadow_1_7480" mode="normal" result="effect4_dropShadow_1_7480" />
              <feBlend in="SourceGraphic" in2="effect4_dropShadow_1_7480" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0)] left-[calc(50%-64px)] rounded-[12px] size-[84px] to-[rgba(9,9,11,0.05)] top-[calc(50%+118px)] translate-x-[-50%] translate-y-[-50%]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Shadcn1 />
      </div>
      <div aria-hidden="true" className="absolute border-4 border-[rgba(255,255,255,0.2)] border-solid inset-[-4px] pointer-events-none rounded-[16px]" />
    </div>
  );
}

function IllustrationTiles() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Illustration/Tiles">
      <Glows3 />
      <Frame24 />
      <Frame17 />
      <Frame23 />
      <Frame19 />
      <Frame20 />
      <Frame35 />
      <Frame21 />
      <Frame25 />
      <Frame22 />
      <Frame16 />
      <Frame18 />
    </div>
  );
}

function Illustration2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="illustration">
      <IllustrationTiles />
    </div>
  );
}

function Tile2() {
  return (
    <div className="bg-white flex-[1_0_0] h-[560px] min-h-px min-w-[360px] relative rounded-[12px]" data-name="Tile">
      <div className="min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] p-[24px] relative size-full">
          <Text2 />
          <Illustration2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] not-italic relative shrink-0 w-full" data-name="text">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-w-full relative shrink-0 text-[#09090b] text-[24px] w-[min-content]">Data-agnostic</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">
        <p className="css-4hzbpn mb-[8px]">All the data is separate from components so you can edit it in seconds or make it dynamic.</p>
        <p className="css-4hzbpn">Easily connect to a CMS of your choice.</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0.05)] right-0 rounded-[12px] to-[rgba(9,9,11,0.1)] top-[calc(50%+32.5px)] translate-y-[-50%]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-full">
          <p className="css-4hzbpn leading-[16px]">Let me quickly jump into Sanity and fix it</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0.05)] right-0 rounded-[12px] to-[rgba(9,9,11,0.1)] top-[calc(50%+72.5px)] translate-y-[-50%]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-full">
          <p className="css-4hzbpn leading-[16px]">Done!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame105() {
  return (
    <div className="absolute bg-[#18181b] content-stretch flex items-center justify-center px-[8px] py-[4px] right-[145px] rounded-[7.2px] top-[calc(50%+118.9px)] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-[#09090b] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7.2px]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#fafafa] text-[12px] text-ellipsis">Erik D.</p>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents right-[145px] top-[calc(50%+107.2px)] translate-y-[-50%]">
      <Frame105 />
      <div className="absolute h-[27.153px] right-[186.8px] top-[calc(50%+97.08px)] translate-y-[-50%] w-[19.2px]">
        <div className="absolute inset-[9.36%_13.24%_9.36%_0]" style={{ "--fill-0": "rgba(24, 24, 27, 1)", "--stroke-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.658 22.0689">
            <path d={svgPaths.p3f0826c0} fill="var(--fill-0, #18181B)" id="Ellipse 30" stroke="var(--stroke-0, #09090B)" strokeWidth="1.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute bg-gradient-to-t from-[rgba(9,9,11,0.05)] left-0 rounded-[12px] to-[rgba(9,9,11,0.1)] top-[calc(50%-106.5px)] translate-y-[-50%]">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-full">
          <p className="css-4hzbpn leading-[16px]">We need to update this heading before launch</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame107() {
  return (
    <div className="absolute bg-[#4f46e5] content-stretch flex items-center justify-center left-0 px-[8px] py-[4px] rounded-[7.2px] top-[calc(50%-39.1px)] translate-y-[-50%]">
      <div aria-hidden="true" className="absolute border-[#a78bfa] border-[1.2px] border-solid inset-0 pointer-events-none rounded-[7.2px] shadow-[0px_0px_8px_0px_rgba(167,139,250,0.8),0px_0px_64px_0px_#4f46e5]" />
      <p className="css-ew64yg font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#09090b] text-[12px] text-ellipsis text-right">Sofia G.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[calc(50%-50.8px)] translate-y-[-50%]">
      <Frame107 />
      <div className="absolute flex h-[27.153px] items-center justify-center left-[50px] top-[calc(50%-60.92px)] translate-y-[-50%] w-[19.2px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[27.153px] relative w-[19.2px]">
            <div className="absolute inset-[9.36%_13.24%_9.36%_0]" style={{ "--fill-0": "rgba(79, 70, 229, 1)", "--stroke-0": "rgba(167, 139, 250, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.658 22.0689">
                <path d={svgPaths.p3f0826c0} fill="var(--fill-0, #4F46E5)" id="Ellipse 30" stroke="var(--stroke-0, #A78BFA)" strokeWidth="1.2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="h-[261px] relative shrink-0 w-full">
      <Frame27 />
      <Frame28 />
      <Group />
      <Frame26 />
      <Group1 />
    </div>
  );
}

function Glows4() {
  return (
    <div className="absolute left-1/2 size-[360px] top-[calc(50%+72px)] translate-x-[-50%] translate-y-[-50%]" data-name="glows">
      <div className="absolute inset-[-111.11%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1160 1160">
          <g id="glows" opacity="0.5">
            <g filter="url(#filter0_f_1_7473)" id="Ellipse 1" opacity="0.7">
              <circle cx="180" cy="180" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" r="180" transform="matrix(-1 0 0 1 760 400)" />
            </g>
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1160" id="filter0_f_1_7473" width="1160" x="0" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
              <feGaussianBlur result="effect1_foregroundBlur_1_7473" stdDeviation="200" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function IllustrationChat() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Illustration/Chat">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[24px] relative size-full">
          <Frame106 />
          <Glows4 />
        </div>
      </div>
    </div>
  );
}

function Illustration3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-full" data-name="illustration">
      <IllustrationChat />
    </div>
  );
}

function Tile3() {
  return (
    <div className="bg-white min-w-[360px] relative rounded-[12px] shrink-0 size-[560px]" data-name="Tile">
      <div className="content-stretch flex flex-col gap-[24px] items-start min-w-[inherit] overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Text3 />
        <Illustration3 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center relative shrink-0 w-full">
      <Tile2 />
      <Tile3 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame34 />
      <Frame36 />
    </div>
  );
}

function BentoGrid2X() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Bento Grid / 2x2">
      <div className="content-stretch flex flex-col gap-[48px] items-start max-w-[inherit] px-[32px] py-[80px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[48px]">
          <p className="css-ew64yg leading-none">Build a better website, faster.</p>
        </div>
        <Frame37 />
      </div>
    </div>
  );
}

function ScanFace() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="scan-face">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="scan-face">
          <path d={svgPaths.p1b518840} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <ScanFace />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">Accessibility first</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame38 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Fully WCAG 2.0 compliment, made with best a11y practices</p>
    </div>
  );
}

function MonitorSmartphone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="monitor-smartphone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="monitor-smartphone">
          <path d={svgPaths.p1a8c9780} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <MonitorSmartphone />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">Responsive design</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame39 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Looks and works great on any device and screen size</p>
    </div>
  );
}

function Eclipse() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="eclipse">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="eclipse">
          <path d={svgPaths.p1844880} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Eclipse />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">Light and dark mode</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame40 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Seamless switching between color schemes, 6 themes included</p>
    </div>
  );
}

function Blocks() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="blocks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="blocks">
          <path d={svgPaths.p35bf0080} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Blocks />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">Easy to customize</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame41 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">{`Flexible options to match your  product or brand`}</p>
    </div>
  );
}

function FastForward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="fast-forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="fast-forward">
          <g id="Vector">
            <path d="M13 19L22 12L13 5V19Z" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d="M2 19L11 12L2 5V19Z" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <FastForward />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">{`Top-level performance `}</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame42 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Made for lightning-fast load times and smooth interactions</p>
    </div>
  );
}

function Rocket() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="rocket">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="rocket">
          <path d={svgPaths.p1e2a7900} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Rocket />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">Production ready</p>
      </div>
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame43 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Thoroughly tested and launch-prepared</p>
    </div>
  );
}

function Languages() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="languages">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="languages">
          <path d={svgPaths.p33610900} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <Languages />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">Made for localisation</p>
      </div>
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame44 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Easy to implement support for multiple languages and regions</p>
    </div>
  );
}

function SquarePen() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="square-pen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="square-pen">
          <path d={svgPaths.pf9f9b00} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <SquarePen />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[18px]">
        <p className="css-4hzbpn leading-[28px]">CMS friendly</p>
      </div>
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-[240px] relative" data-name="Item">
      <Frame45 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">Built to work with your any headless content management system</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-start flex flex-wrap gap-[48px] items-start relative shrink-0 w-full">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
      <Item5 />
      <Item6 />
      <Item7 />
    </div>
  );
}

function ItemsDefault() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Items / default">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[inherit] px-[32px] py-[80px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[48px] text-center">
            <p className="css-ew64yg leading-none">
              Everything you need.
              <br aria-hidden="true" />
              Nothing you don’t.
            </p>
          </div>
          <Frame46 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center not-italic relative shrink-0 text-center w-full z-[2]" data-name="content">
      <p className="bg-clip-text css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none relative shrink-0 text-[72px] text-shadow-[0px_25px_50px_rgba(0,0,0,0.25)] w-[1248px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(116.224deg, rgb(9, 9, 11) 24.451%, rgb(113, 113, 122) 73.781%)" }}>
        Quality you can trust.
        <br aria-hidden="true" />
        And build on.
      </p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#71717a] text-[20px] w-[580px]">You can trust that all of the designs are taking the full advantage of newest Figma’s features and that code is written following best practices out there.</p>
    </div>
  );
}

function Glows5() {
  return (
    <div className="absolute h-[1069px] left-[-217px] overflow-clip right-[-216px] top-[-285px]" data-name="glows">
      <div className="absolute h-[289px] left-[375px] top-[298px] w-[963px]">
        <div className="absolute inset-[-107.96%_-32.4%]" style={{ "--fill-0": "rgba(79, 70, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1587 913">
            <g filter="url(#filter0_f_1_7444)" id="Ellipse 1">
              <ellipse cx="793.5" cy="456.5" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" rx="481.5" ry="144.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="913" id="filter0_f_1_7444" width="1587" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_7444" stdDeviation="156" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute h-[539px] left-[101px] right-[101px] top-[-4px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1046 539">
        <g id="Group 5">
          <mask height="539" id="mask0_1_7446" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="1046" x="0" y="0">
            <path d={svgPaths.p47be280} fill="var(--fill-0, white)" id="Ellipse 34" />
          </mask>
          <g mask="url(#mask0_1_7446)">
            <g filter="url(#filter0_f_1_7446)" id="Subtract" opacity="0.2">
              <path d={svgPaths.p54be530} fill="var(--fill-0, #4F46E5)" />
            </g>
            <g filter="url(#filter1_f_1_7446)" id="Subtract_2" opacity="0.5">
              <path d={svgPaths.p12dd8892} fill="var(--fill-0, #A78BFA)" />
            </g>
            <g filter="url(#filter2_f_1_7446)" id="Subtract_3">
              <path d={svgPaths.p84d7080} fill="var(--fill-0, #09090B)" />
            </g>
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="522.95" id="filter0_f_1_7446" width="1109.44" x="-31.7194" y="-72">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7446" stdDeviation="20" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="420.692" id="filter1_f_1_7446" width="1052.93" x="-3.46492" y="-72">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7446" stdDeviation="20" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="307.916" id="filter2_f_1_7446" width="934.305" x="55.8471" y="-72">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7446" stdDeviation="20" />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

function IllustrationRisingLarge() {
  return (
    <div className="h-[535px] relative shrink-0 w-[1248px] z-[1]" data-name="Illustration / Rising Large">
      <Glows5 />
      <div className="absolute h-[539px] left-[101px] right-[101px] top-[-4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1046 539">
          <path d={svgPaths.p47be280} fill="url(#paint0_linear_1_7561)" id="Ellipse 33" />
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7561" x1="523" x2="523" y1="0" y2="446">
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="0.16253" stopColor="white" stopOpacity="0.2" />
              <stop offset="1" stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <Group2 />
      <div className="absolute h-[539px] left-[101px] right-[101px] top-[-4px]">
        <div className="absolute inset-[-12.34%_-6.36%_-11.87%_-6.36%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1179 669.5">
            <g filter="url(#filter0_dd_1_7496)" id="Ellipse 32">
              <path d={svgPaths.p27808600} stroke="url(#paint0_linear_1_7496)" strokeWidth="5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="669.5" id="filter0_dd_1_7496" width="1179" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="32" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.309804 0 0 0 0 0.27451 0 0 0 0 0.898039 0 0 0 1 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1_7496" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset />
                <feGaussianBlur stdDeviation="4" />
                <feColorMatrix type="matrix" values="0 0 0 0 0.654902 0 0 0 0 0.545098 0 0 0 0 0.980392 0 0 0 0.8 0" />
                <feBlend in2="effect1_dropShadow_1_7496" mode="normal" result="effect2_dropShadow_1_7496" />
                <feBlend in="SourceGraphic" in2="effect2_dropShadow_1_7496" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7496" x1="589.5" x2="589.5" y1="66.5" y2="605.5">
                <stop stopColor="#A78BFA" />
                <stop offset="0.491922" stopColor="#4F46E5" stopOpacity="0.1" />
                <stop offset="1" stopColor="#4F46E5" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bg-gradient-to-b bottom-0 from-[rgba(255,255,255,0)] h-[434px] left-0 right-0 to-[85.5%] to-white" data-name="fade" />
    </div>
  );
}

function FeatureRising() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Feature / Rising">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[96px] isolate items-center max-w-[inherit] pt-[128px] px-[32px] relative w-full">
          <Content1 />
          <IllustrationRisingLarge />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center not-italic relative shrink-0 text-center w-full z-[2]" data-name="content">
      <p className="bg-clip-text css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none relative shrink-0 text-[48px] text-shadow-[0px_25px_50px_rgba(0,0,0,0.25)] w-[1248px]" style={{ WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(145.913deg, rgb(9, 9, 11) 24.451%, rgb(113, 113, 122) 73.781%)" }}>
        Make the right impression
      </p>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#71717a] text-[20px] w-[578px]">Launch UI makes it easy to build an unforgetable website that resonates with professional design-centric audiences.</p>
    </div>
  );
}

function Blocks1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="blocks">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="blocks">
          <path d={svgPaths.p22826300} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative shrink-0">
      <Blocks1 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#09090b] text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Choose your sections</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#71717a] text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Choose among 100+ components to build a landing page suited to the needs of your product.</p>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-gradient-to-t from-[rgba(9,9,11,0.05)] relative rounded-[6px] shrink-0 to-[rgba(9,9,11,0.1)] w-full" data-name="Tab">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="content-stretch flex gap-[8px] items-start pl-[12px] pr-[20px] py-[12px] relative w-full">
        <Frame2 />
        <Frame47 />
      </div>
    </div>
  );
}

function SquarePen1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="square-pen">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7423)" id="square-pen">
          <path d={svgPaths.pf9f9b00} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7423">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative shrink-0">
      <SquarePen1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#71717a]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Add your content</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Fill the blanks with screenshots, videos, and other content featuring your product.</p>
      </div>
    </div>
  );
}

function Tab1() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Tab">
      <div className="content-stretch flex gap-[8px] items-start pl-[12px] pr-[20px] py-[12px] relative w-full">
        <Frame48 />
        <Frame49 />
      </div>
    </div>
  );
}

function Palette() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="palette">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7420)" id="palette">
          <g id="Vector">
            <path d={svgPaths.p2476dfc0} stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.pf6f2500} stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p2f047a30} stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p7aea480} stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
            <path d={svgPaths.p3eb1d9c0} stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_7420">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex items-center p-[2px] relative shrink-0">
      <Palette />
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#71717a]">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px] w-full">
        <p className="css-4hzbpn leading-[20px]">Customize</p>
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px] w-full">
        <p className="css-4hzbpn leading-[16px]">Make design yours in no time by changing the variables that control colors, typography, and other styles.</p>
      </div>
    </div>
  );
}

function Tab2() {
  return (
    <div className="relative rounded-[6px] shrink-0 w-full" data-name="Tab">
      <div className="content-stretch flex gap-[8px] items-start pl-[12px] pr-[20px] py-[12px] relative w-full">
        <Frame50 />
        <Frame51 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start min-w-[240px] relative shrink-0 w-[373px]">
      <Tab />
      <Tab1 />
      <Tab2 />
    </div>
  );
}

function Glows6() {
  return (
    <div className="absolute h-[1069px] left-[-217px] right-[-248px] top-[-285px]" data-name="glows">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1260 1069">
        <g clipPath="url(#clip0_1_7416)" id="glows">
          <g filter="url(#filter0_f_1_7416)" id="Ellipse 1">
            <ellipse cx="630" cy="442.5" fill="var(--fill-0, #FDBA74)" fillOpacity="0.6" rx="255" ry="144.5" />
          </g>
          <g filter="url(#filter1_f_1_7416)" id="Ellipse 2">
            <ellipse cx="630" cy="377" fill="var(--fill-0, #FB923C)" rx="255" ry="74" />
          </g>
        </g>
        <defs>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="913" id="filter0_f_1_7416" width="1134" x="63" y="-14">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7416" stdDeviation="156" />
          </filter>
          <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="276" id="filter1_f_1_7416" width="638" x="311" y="239">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
            <feGaussianBlur result="effect1_foregroundBlur_1_7416" stdDeviation="32" />
          </filter>
          <clipPath id="clip0_1_7416">
            <rect fill="white" height="1069" width="1260" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame53() {
  return (
    <div className="absolute bg-[rgba(9,9,11,0.05)] content-stretch flex flex-col items-start left-0 pt-[8px] px-[8px] right-0 rounded-[16px] top-0" data-name="frame">
      <div className="aspect-[1232/753] pointer-events-none relative rounded-[8px] shrink-0 w-full" data-name="image">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-[100.21%] left-[-0.08%] max-w-none top-[-0.1%] w-[100.16%]" src={imgImage} />
        </div>
        <div aria-hidden="true" className="absolute border border-solid border-white inset-0 rounded-[8px]" />
      </div>
    </div>
  );
}

function IllustrationMockup1() {
  return (
    <div className="h-[850px] relative rounded-[12px] shrink-0 w-full" data-name="Illustration / Mockup">
      <Glows6 />
      <Frame53 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="aspect-[859/482] bg-white flex-[1_0_0] min-h-[134.668212890625px] min-w-[239.99998474121094px] relative rounded-[12px]">
      <div className="min-h-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start min-h-[inherit] min-w-[inherit] p-[32px] relative size-full">
          <IllustrationMockup1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-start flex flex-[1_0_0] flex-wrap gap-[16px] items-start justify-center min-h-px min-w-px relative w-full z-[1]">
      <Frame52 />
      <Frame3 />
    </div>
  );
}

function TabsDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[96px] h-[874px] isolate items-center max-w-[1312px] px-[32px] py-[80px] relative shrink-0 w-[1312px]" data-name="Tabs / Default">
      <Content2 />
      <Frame54 />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-center not-italic relative shrink-0 text-center" data-name="title">
      <div className="css-g0mm18 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#09090b] text-[48px]">
        <p className="css-ew64yg leading-none">
          Loved by designers and
          <br aria-hidden="true" />
          developers across the planet
        </p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[28px] relative shrink-0 text-[#71717a] text-[20px] w-[580px]">Here’s what people are saying about Launch UI</p>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">Zara Qadir</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@fab3304</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar />
      <Frame55 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame56 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px]">{`Playing around with `}</span>
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">{` suddenly made me feeling inspired to launch that side project.`}</span>
      </p>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame57 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">Fabrizio Fernandez</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@fab3304</p>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar1 />
      <Frame58 />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame59 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px]">{`Testing out `}</span>
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">{`'s responsive design. That’s the template we’ve all been waiting for. My mobile-first heart is doing a happy dance.`}</span>
      </p>
    </div>
  );
}

function Testimonial1() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame60 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Avatar2() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">{`Felix Beaumont `}</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@felixbs</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar2 />
      <Frame61 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame62 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px]">{`Digging into `}</span>
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">. Those shadows are giving me serious design envy.</span>
      </p>
    </div>
  );
}

function Testimonial2() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame63 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Avatar3() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">Olivia Blackwood</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@olivia1992</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar3 />
      <Frame64 />
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame65 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">{` is not messing around with its component library game.`}</span>
      </p>
    </div>
  );
}

function Testimonial3() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame66 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Row() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="row">
      <Testimonial />
      <Testimonial1 />
      <Testimonial2 />
      <Testimonial3 />
    </div>
  );
}

function Avatar4() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">Esme Rothschild</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@EsmeRothArt</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar4 />
      <Frame67 />
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame68 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">{` is siiiiick. That globe graphic though. Making me feel like I'm building websites for a sci-fi movie.`}</span>
      </p>
    </div>
  );
}

function Testimonial4() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame69 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Avatar5() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">Darius Flynn</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@flynnn</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar5 />
      <Frame70 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame71 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px]">{`Exploring `}</span>
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">{`'s sleek UI. It's like a dark mode enthusiast's playground.`}</span>
      </p>
    </div>
  );
}

function Testimonial5() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame72 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Avatar6() {
  return (
    <div className="relative rounded-[9999px] shrink-0 size-[48px]" data-name="Avatar">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[9999px]">
        <div className="absolute bg-[#09090b] inset-0 rounded-[9999px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[9999px]">
          <img alt="" className="absolute h-[124.44%] left-[-69.07%] max-w-none top-[-0.7%] w-[186.67%]" src={imgAvatar} />
        </div>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[24px] justify-center leading-[0] relative shrink-0 text-[#09090b] text-[18px] w-[373px]">
        <p className="css-4hzbpn leading-[28px]">Kai Nakamura</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#71717a] text-[16px] w-[373px]">@KaiNakWaves</p>
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Avatar6 />
      <Frame73 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full">
      <Frame74 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        <span className="leading-[24px]">{`Just made my first website with `}</span>
        <span className="leading-[24px] text-[#a78bfa]">@launchui</span>
        <span className="leading-[24px]">. Its flexibility is speaking my language. No drama, just seamless integration.</span>
      </p>
    </div>
  );
}

function Testimonial6() {
  return (
    <div className="bg-gradient-to-b from-[rgba(9,9,11,0.04)] relative rounded-[12px] self-stretch shrink-0 to-[rgba(9,9,11,0.02)] w-[421px]" data-name="Testimonial">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[24px] relative rounded-[inherit] size-full">
        <Frame75 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.1)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Row1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="row">
      <Testimonial4 />
      <Testimonial5 />
      <Testimonial6 />
    </div>
  );
}

function Testimonials() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center overflow-clip relative shrink-0 w-full" data-name="testimonials">
      <Row />
      <Row1 />
      <div className="absolute bottom-0 flex items-center justify-center right-0 top-0 w-[200px]">
        <div className="flex-none h-[200px] rotate-[-90deg] w-[376px]">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] size-full to-[85.5%] to-white" data-name="fade" />
        </div>
      </div>
      <div className="absolute bottom-0 flex items-center justify-center left-0 top-0 w-[200px]">
        <div className="flex-none h-[200px] rotate-[90deg] w-[376px]">
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] size-full to-[85.5%] to-white" data-name="fade" />
        </div>
      </div>
    </div>
  );
}

function Testimonials1() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Testimonials">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[80px] items-center max-w-[inherit] px-[32px] py-[80px] relative w-full">
          <Title />
          <Testimonials />
        </div>
      </div>
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[20px]">
        <p className="css-4hzbpn leading-[28px]">Free</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full" data-name="text">
      <Frame76 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        For everyone starting out on a<br aria-hidden="true" />
        website for their big idea
      </p>
    </div>
  );
}

function Text5() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] h-[66px] items-baseline max-w-[460px] relative shrink-0" data-name="text">
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#71717a] text-[16px]">$</p>
      <p className="css-ew64yg leading-none relative shrink-0 text-[#09090b] text-[60px]">0</p>
    </div>
  );
}

function Text6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[24px] max-w-[460px] min-h-px min-w-px pt-[6px] relative text-[16px]" data-name="text">
      <p className="css-4hzbpn relative shrink-0 text-[#18181b] w-full">free</p>
      <p className="css-4hzbpn relative shrink-0 text-[#71717a] w-full">for everyone</p>
    </div>
  );
}

function Frame77() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full">
      <Text5 />
      <Text6 />
    </div>
  );
}

function Button4() {
  return (
    <a className="bg-gradient-to-t cursor-pointer from-[rgba(9,9,11,0.05)] relative rounded-[6px] shrink-0 to-[rgba(9,9,11,0.1)] w-full" data-name="Button" href="https://www.mikolajdobrucki.com/jupiter?ref=figma">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px] text-left" role="link" tabIndex="0">
            <p className="css-ew64yg cursor-pointer leading-[20px]">Get started for free</p>
          </div>
        </div>
      </div>
    </a>
  );
}

function CircleCheckBig() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">9 landing page sections</p>
      </div>
    </div>
  );
}

function CircleCheckBig1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig1 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">36 components</p>
      </div>
    </div>
  );
}

function CircleCheckBig2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig2 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">5 custom animations</p>
      </div>
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Tile4() {
  return (
    <div className="bg-white flex-[1_0_0] h-[541px] max-w-[420px] min-h-px min-w-[240px] relative rounded-[12px]" data-name="Tile">
      <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-w-[inherit] p-[24px] relative size-full">
          <Text4 />
          <Frame77 />
          <Button4 />
          <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">Free and open-source forever</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357.333 1">
                <path d="M0 0.5H357.333" id="Vector 1" stroke="var(--stroke-0, #09090B)" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
          <Frame78 />
          <div className="absolute h-0 left-[76px] right-[61.33px] top-px" data-name="shine">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 2">
                <path d="M0 1H268" id="shine" stroke="url(#paint0_linear_1_7407)" strokeWidth="2" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7407" x1="0" x2="268" y1="1.5" y2="1.5">
                    <stop stopColor="#09090B" stopOpacity="0" />
                    <stop offset="0.505" stopColor="#09090B" />
                    <stop offset="1" stopColor="#09090B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function User() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="user">
          <path d={svgPaths.p28ea4700} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <User />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[20px]">
        <p className="css-4hzbpn leading-[28px]">Pro</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full" data-name="text">
      <Frame79 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        For early-stage founders,
        <br aria-hidden="true" />
        solopreneurs and indie devs
      </p>
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] h-[66px] items-baseline max-w-[460px] relative shrink-0" data-name="text">
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#71717a] text-[16px]">$</p>
      <p className="css-ew64yg leading-none relative shrink-0 text-[#09090b] text-[60px]">0</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[24px] max-w-[460px] min-h-px min-w-px pt-[6px] relative text-[16px]" data-name="text">
      <p className="css-4hzbpn relative shrink-0 text-[#18181b] w-full">one-time payment</p>
      <p className="css-4hzbpn relative shrink-0 text-[#71717a] w-full">plus local taxes</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Button5() {
  return (
    <a className="bg-gradient-to-b cursor-pointer from-[#18181b] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 to-[rgba(9,9,11,0.8)] w-full" data-name="Button" href="https://www.mikolajdobrucki.com/jupiter?ref=figma">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-left" role="link" tabIndex="0">
            <p className="css-ew64yg cursor-pointer leading-[20px]">Get all-access</p>
          </div>
        </div>
      </div>
    </a>
  );
}

function CircleCheckBig3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig3 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">66 landing page sections</p>
      </div>
    </div>
  );
}

function CircleCheckBig4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig4 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">126 components</p>
      </div>
    </div>
  );
}

function CircleCheckBig5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig5 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">16 illustrations</p>
      </div>
    </div>
  );
}

function CircleCheckBig6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig6 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">15 custom animations</p>
      </div>
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
    </div>
  );
}

function Tile5() {
  return (
    <div className="bg-white flex-[1_0_0] h-[541px] max-w-[420px] min-h-px min-w-[240px] relative rounded-[12px]" data-name="Tile">
      <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-w-[inherit] p-[24px] relative size-full">
          <Text7 />
          <Frame80 />
          <Button5 />
          <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">Free and open-source forever</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357.333 1">
                <path d="M0 0.5H357.333" id="Vector 1" stroke="var(--stroke-0, #09090B)" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
          <Frame81 />
          <div className="absolute h-[144.5px] left-[3.5px] top-[-79px] w-[481.5px]" data-name="glow">
            <div className="absolute inset-[-107.96%_-32.4%]" style={{ "--fill-0": "rgba(253, 186, 116, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 793.5 456.5">
                <g filter="url(#filter0_f_1_7529)" id="glow">
                  <ellipse cx="396.75" cy="228.25" fill="var(--fill-0, #FDBA74)" fillOpacity="0.6" rx="240.75" ry="72.25" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="456.5" id="filter0_f_1_7529" width="793.5" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_7529" stdDeviation="78" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute h-0 left-[76px] right-[61.33px] top-px" data-name="shine">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 2">
                <path d="M0 1H268" id="shine" stroke="url(#paint0_linear_1_7402)" strokeWidth="2" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7402" x1="0" x2="268" y1="1.5" y2="1.5">
                    <stop stopColor="#FDBA74" stopOpacity="0" />
                    <stop offset="0.505" stopColor="#FB923C" />
                    <stop offset="1" stopColor="#FDBA74" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function User1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="user">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="user">
          <path d={svgPaths.p28ea4700} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 w-full">
      <User1 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#09090b] text-[20px]">
        <p className="css-4hzbpn leading-[28px]">Team</p>
      </div>
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start max-w-[460px] relative shrink-0 w-full" data-name="text">
      <Frame82 />
      <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#71717a] text-[16px] w-full">
        For teams and agencies working
        <br aria-hidden="true" />
        on cool products together
      </p>
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex font-['Inter:Semi_Bold',sans-serif] font-semibold gap-[8px] h-[66px] items-baseline max-w-[460px] relative shrink-0" data-name="text">
      <p className="css-ew64yg leading-[24px] relative shrink-0 text-[#71717a] text-[16px]">$</p>
      <p className="css-ew64yg leading-none relative shrink-0 text-[#09090b] text-[60px]">0</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal items-start leading-[24px] max-w-[460px] min-h-px min-w-px pt-[6px] relative text-[16px]" data-name="text">
      <p className="css-4hzbpn relative shrink-0 text-[#18181b] w-full">one-time payment</p>
      <p className="css-4hzbpn relative shrink-0 text-[#71717a] w-full">plus local taxes</p>
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex gap-[8px] items-center not-italic relative shrink-0 w-full">
      <Text11 />
      <Text12 />
    </div>
  );
}

function Button6() {
  return (
    <a className="bg-gradient-to-t cursor-pointer from-[rgba(9,9,11,0.05)] relative rounded-[6px] shrink-0 to-[rgba(9,9,11,0.1)] w-full" data-name="Button" href="https://www.mikolajdobrucki.com/jupiter?ref=figma">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative w-full">
          <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px] text-left" role="link" tabIndex="0">
            <p className="css-ew64yg cursor-pointer leading-[20px]">Get all-access for your team</p>
          </div>
        </div>
      </div>
    </a>
  );
}

function CircleCheckBig7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="circle-check-big">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7539)" id="circle-check-big">
          <path d={svgPaths.p77a4580} id="Vector" stroke="var(--stroke-0, #71717A)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7539">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="ListItem">
      <CircleCheckBig7 />
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#18181b] text-[16px]">
        <p className="css-4hzbpn leading-[24px]">All the templates, components and sections available for your entire team</p>
      </div>
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <ListItem7 />
    </div>
  );
}

function Tile6() {
  return (
    <div className="bg-white flex-[1_0_0] h-[541px] max-w-[420px] min-h-px min-w-[240px] relative rounded-[12px]" data-name="Tile">
      <div className="max-w-[inherit] min-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start max-w-[inherit] min-w-[inherit] p-[24px] relative size-full">
          <Text10 />
          <Frame83 />
          <Button6 />
          <p className="css-4hzbpn font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[#71717a] text-[16px] w-[min-content]">Free and open-source forever</p>
          <div className="h-0 relative shrink-0 w-full">
            <div className="absolute inset-[-0.5px_0]" style={{ "--stroke-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 357.333 1">
                <path d="M0 0.5H357.333" id="Vector 1" stroke="var(--stroke-0, #09090B)" strokeOpacity="0.1" />
              </svg>
            </div>
          </div>
          <Frame84 />
          <div className="absolute h-[144.5px] left-[3.5px] top-[-79px] w-[481.5px]" data-name="glow">
            <div className="absolute inset-[-107.96%_-32.4%]" style={{ "--fill-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 793.5 456.5">
                <g filter="url(#filter0_f_1_7414)" id="glow">
                  <ellipse cx="396.75" cy="228.25" fill="var(--fill-0, #09090B)" fillOpacity="0.3" rx="240.75" ry="72.25" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="456.5" id="filter0_f_1_7414" width="793.5" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                    <feGaussianBlur result="effect1_foregroundBlur_1_7414" stdDeviation="78" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="absolute h-0 left-[76px] right-[61.33px] top-px" data-name="shine">
            <div className="absolute inset-[-1px_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 268 2">
                <path d="M0 1H268" id="shine" stroke="url(#paint0_linear_1_7407)" strokeWidth="2" />
                <defs>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7407" x1="0" x2="268" y1="1.5" y2="1.5">
                    <stop stopColor="#09090B" stopOpacity="0" />
                    <stop offset="0.505" stopColor="#09090B" />
                    <stop offset="1" stopColor="#09090B" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Tile4 />
      <Tile5 />
      <Tile6 />
    </div>
  );
}

function PricingDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[48px] items-center max-w-[1312px] px-[32px] py-[80px] relative shrink-0 w-[1312px]" data-name="Pricing / default">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[#09090b] text-[48px] text-center w-[min-content]">
        <p className="css-4hzbpn leading-none">Build your dream landing page, today.</p>
      </div>
      <p className="css-4hzbpn font-['Inter:Medium',sans-serif] font-medium leading-[28px] not-italic relative shrink-0 text-[#71717a] text-[20px] text-center w-[594px]">Get lifetime access to all the components. No recurring fees. Just simple, transparent pricing.</p>
      <Frame85 />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] w-[373px]">
        <p className="css-4hzbpn leading-[24px]">Is Launch UI easy to customise?</p>
      </div>
    </div>
  );
}

function ChevronDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7397)" id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame86 />
      <ChevronDown2 />
    </div>
  );
}

function AccordionItem() {
  return (
    <div className="relative shrink-0 w-[720px]" data-name="AccordionItem">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <Frame87 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] w-[373px]">
        <p className="css-4hzbpn leading-[24px]">Is Launch UI optimized for search engines?</p>
      </div>
    </div>
  );
}

function ChevronDown3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7397)" id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame88 />
      <ChevronDown3 />
    </div>
  );
}

function AccordionItem1() {
  return (
    <div className="relative shrink-0 w-[720px]" data-name="AccordionItem">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <Frame89 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] w-[373px]">
        <p className="css-4hzbpn leading-[24px]">How does Launch UI compare to no-code tools?</p>
      </div>
    </div>
  );
}

function ChevronDown4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7397)" id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame90 />
      <ChevronDown4 />
    </div>
  );
}

function AccordionItem2() {
  return (
    <div className="relative shrink-0 w-[720px]" data-name="AccordionItem">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <Frame91 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] w-[373px]">
        <p className="css-4hzbpn leading-[24px]">Why not just coding a website yourself?</p>
      </div>
    </div>
  );
}

function ChevronDown5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7397)" id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame92 />
      <ChevronDown5 />
    </div>
  );
}

function AccordionItem3() {
  return (
    <div className="relative shrink-0 w-[720px]" data-name="AccordionItem">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <Frame93 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] w-[373px]">
        <p className="css-4hzbpn leading-[24px]">{`Can I get a refund if I don't like it?`}</p>
      </div>
    </div>
  );
}

function ChevronDown6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7397)" id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame94 />
      <ChevronDown6 />
    </div>
  );
}

function AccordionItem4() {
  return (
    <div className="relative shrink-0 w-[720px]" data-name="AccordionItem">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <Frame95 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium h-[24px] justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[16px] w-[373px]">
        <p className="css-4hzbpn leading-[24px]">What features will be added in the future?</p>
      </div>
    </div>
  );
}

function ChevronDown7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="chevron-down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_7397)" id="chevron-down">
          <path d="M6 9L12 15L18 9" id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_1_7397">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame96 />
      <ChevronDown7 />
    </div>
  );
}

function AccordionItem5() {
  return (
    <div className="relative shrink-0 w-[720px]" data-name="AccordionItem">
      <div className="content-stretch flex flex-col items-start overflow-clip py-[16px] relative rounded-[inherit] w-full">
        <Frame97 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame98() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <AccordionItem />
      <AccordionItem1 />
      <AccordionItem2 />
      <AccordionItem3 />
      <AccordionItem4 />
      <AccordionItem5 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center max-w-[720px] relative shrink-0 w-full z-[1]" data-name="content">
      <p className="css-4hzbpn font-['Inter:Semi_Bold',sans-serif] font-semibold leading-none not-italic relative shrink-0 text-[#09090b] text-[48px] text-center text-shadow-[0px_25px_50px_rgba(0,0,0,0.25)] w-full">Questions and Answers</p>
      <Frame98 />
    </div>
  );
}

function FaqDefault() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="FAQ / default">
      <div className="flex flex-col items-center max-w-[inherit] size-full">
        <div className="content-stretch flex flex-col isolate items-center max-w-[inherit] px-[32px] py-[80px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <a className="bg-gradient-to-b content-stretch cursor-pointer flex from-[#18181b] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 to-[rgba(9,9,11,0.8)]" data-name="Button" href="https://www.mikolajdobrucki.com/jupiter?ref=figma">
      <div className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px] text-left" role="link" tabIndex="0">
        <p className="css-ew64yg cursor-pointer leading-[20px]">Get started</p>
      </div>
    </a>
  );
}

function Button8() {
  return (
    <div className="bg-gradient-to-t content-stretch flex from-[rgba(9,9,11,0.05)] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shrink-0 to-[rgba(9,9,11,0.1)]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(9,9,11,0.2)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <a className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[14px]" href="https://github.com/launch-ui/launch-ui">
        <p className="css-ew64yg cursor-pointer leading-[20px]">Github</p>
      </a>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <Button7 />
      <Button8 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-center pb-[192px] pt-[128px] relative shrink-0 w-full z-[2]" data-name="content">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[48px] text-center w-[1248px]">
        <p className="css-4hzbpn leading-none">Start building</p>
      </div>
      <Frame99 />
    </div>
  );
}

function Glows7() {
  return (
    <div className="absolute bottom-0 h-[280px] left-0 overflow-clip right-0 z-[1]" data-name="glows">
      <div className="absolute bottom-[-307px] h-[289px] left-1/2 translate-x-[-50%] w-[963px]">
        <div className="absolute inset-[-107.96%_-32.4%]" style={{ "--fill-0": "rgba(79, 70, 229, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1587 913">
            <g filter="url(#filter0_f_1_7444)" id="Ellipse 1">
              <ellipse cx="793.5" cy="456.5" fill="var(--fill-0, #4F46E5)" fillOpacity="0.6" rx="481.5" ry="144.5" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="913" id="filter0_f_1_7444" width="1587" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_7444" stdDeviation="156" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[-171px] h-[148px] left-1/2 translate-x-[-50%] w-[963px]">
        <div className="absolute inset-[-43.24%_-6.65%]" style={{ "--fill-0": "rgba(167, 139, 250, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1091 276">
            <g filter="url(#filter0_f_1_7428)" id="Ellipse 2">
              <ellipse cx="545.5" cy="138" fill="var(--fill-0, #A78BFA)" rx="481.5" ry="74" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="276" id="filter0_f_1_7428" width="1091" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                <feGaussianBlur result="effect1_foregroundBlur_1_7428" stdDeviation="32" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cta() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="CTA">
      <div className="flex flex-col items-center max-w-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[96px] isolate items-center max-w-[inherit] px-[32px] relative w-full">
          <Content4 />
          <Glows7 />
        </div>
      </div>
    </div>
  );
}

function Favicon2() {
  return (
    <div className="absolute inset-[-16.67%]" data-name="favicon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="favicon">
          <g id="Vector 3">
            <path d={svgPaths.p1b7acd70} fill="var(--fill-0, #09090B)" />
            <path d="M15 20V18L28 5V7L15 20Z" fill="var(--fill-0, #09090B)" />
            <path d="M15 24V22L28 9V11L15 24Z" fill="var(--fill-0, #09090B)" />
            <path d="M15 28V26L20 21V23L15 28Z" fill="var(--fill-0, #09090B)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="icon">
      <Favicon2 />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-[104px] relative" data-name="Name">
      <Icon2 />
      <div className="css-g0mm18 flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#09090b] text-[18px] text-center">
        <p className="css-ew64yg leading-[28px]">Launch UI</p>
      </div>
    </div>
  );
}

function FooterColumn() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-h-px min-w-[104px] not-italic relative text-[14px]" data-name="FooterColumn">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31px] justify-center relative shrink-0 text-[#09090b] w-full">
        <p className="css-4hzbpn leading-[20px]">Product</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Changelog</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Documentation</p>
      </div>
    </div>
  );
}

function FooterColumn1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-h-px min-w-[104px] not-italic relative text-[14px]" data-name="FooterColumn">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31px] justify-center relative shrink-0 text-[#09090b] w-full">
        <p className="css-4hzbpn leading-[20px]">Company</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">About</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Careers</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Blog</p>
      </div>
    </div>
  );
}

function FooterColumn2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-h-px min-w-[104px] not-italic relative text-[14px]" data-name="FooterColumn">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31px] justify-center relative shrink-0 text-[#09090b] w-full">
        <p className="css-4hzbpn leading-[20px]">Contact</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Github</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Discord</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Twitter</p>
      </div>
    </div>
  );
}

function Blank() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start justify-center leading-[0] min-h-px min-w-[104px] not-italic opacity-0 relative text-[14px]" data-name="(blank)">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold h-[31px] justify-center relative shrink-0 text-[#09090b] w-full">
        <p className="css-4hzbpn leading-[20px]">Contact</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Github</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Discord</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#71717a] w-full">
        <p className="css-4hzbpn leading-[20px]">Twitter</p>
      </div>
    </div>
  );
}

function Frame100() {
  return (
    <div className="content-start flex flex-wrap gap-[16px] items-start pb-[96px] pt-[48px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[rgba(9,9,11,0.1)] border-b border-solid inset-0 pointer-events-none" />
      <Name2 />
      <FooterColumn />
      <FooterColumn1 />
      <FooterColumn2 />
      {[...Array(2).keys()].map((_, i) => (
        <Blank key={i} />
      ))}
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0">
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[16px]">Privacy Policy</p>
      </div>
      <div className="css-g0mm18 flex flex-col justify-center relative shrink-0">
        <p className="css-ew64yg leading-[16px]">Terms of service</p>
      </div>
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',sans-serif] font-normal gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[#71717a] text-[12px] w-full">
      <div className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px relative">
        <p className="css-4hzbpn leading-[16px]">© 2024 Mikołaj Dobrucki. All rights reserved.</p>
      </div>
      <Frame101 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white max-w-[1312px] relative shrink-0 w-full" data-name="Footer">
      <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] p-[32px] relative w-full">
        <Frame100 />
        <Frame102 />
      </div>
    </div>
  );
}

function JupiterDarkModeUltraviolet() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[1440px]" data-name="Jupiter / Dark mode / Ultraviolet">
      <NavbarDefault />
      <HeroDefault />
      <Logos />
      <BentoGrid2X />
      <ItemsDefault />
      <FeatureRising />
      <TabsDefault />
      <Testimonials1 />
      <PricingDefault />
      <FaqDefault />
      <Cta />
      <Footer />
    </div>
  );
}

function LaunchUiDarkModeUltraviolet() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px overflow-clip relative" data-name="Launch UI / Dark mode / Ultraviolet">
      <JupiterDarkModeUltraviolet />
    </div>
  );
}

function IconStart() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p180dff00} fill="url(#paint0_linear_1_7439)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7439" x1="8" x2="8" y1="0" y2="16">
            <stop stopColor="#FB923C" />
            <stop offset="1" stopColor="#FDBA74" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart />
    </div>
  );
}

function IconStart1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p180dff00} fill="url(#paint0_linear_1_7395)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7395" x1="8" x2="8" y1="0" y2="16">
            <stop stopColor="#FB923C" />
            <stop offset="1" stopColor="#EF4444" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart1 />
    </div>
  );
}

function IconStart2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p180dff00} fill="url(#paint0_linear_1_7507)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7507" x1="8" x2="8" y1="0" y2="16">
            <stop stopColor="#A78BFA" />
            <stop offset="1" stopColor="#4F46E5" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[rgba(9,9,11,0.05)] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart2 />
    </div>
  );
}

function IconStart3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p180dff00} fill="url(#paint0_linear_1_7400)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7400" x1="8" x2="8" y1="0" y2="16">
            <stop stopColor="#D4D4D8" />
            <stop offset="1" stopColor="#71717A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart3 />
    </div>
  );
}

function IconStart4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p180dff00} fill="url(#paint0_linear_1_7393)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_7393" x1="8" x2="8" y1="0" y2="16">
            <stop stopColor="#6EE7B7" />
            <stop offset="1" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart4 />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
    </div>
  );
}

function IconStart5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p7ad6800} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5.33333 14H10.6667" id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11.3333V14" id="Vector_3" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-[rgba(9,9,11,0.05)] content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart5 />
    </div>
  );
}

function IconStart6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p1674e600} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7.33333 12H8.66667" id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart6 />
    </div>
  );
}

function IconStart7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="icon-start">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="icon-start">
          <path d={svgPaths.p250ba200} id="Vector" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M8 11.3333H8.00667" id="Vector_2" stroke="var(--stroke-0, #09090B)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Button16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[8px] relative rounded-[6px] shrink-0" data-name="Button">
      <IconStart7 />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0">
      <Button14 />
      <Button15 />
      <Button16 />
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-gradient-to-b content-stretch flex from-[#18181b] gap-[8px] items-center justify-center px-[16px] py-[8px] relative rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] shrink-0 to-[rgba(9,9,11,0.8)]" data-name="Button">
      <a className="css-g0mm18 flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#fafafa] text-[14px]" href="https://www.launchuicomponents.com/">
        <p className="css-ew64yg cursor-pointer leading-[20px]">Live preview</p>
      </a>
    </div>
  );
}

function PreviewNav() {
  return (
    <div className="absolute backdrop-blur-[12px] bottom-[16px] content-stretch flex gap-[8px] items-center left-[calc(50%+12px)] overflow-clip p-[8px] rounded-[12px] translate-x-[-50%]" data-name=".previewNav" style={{ backgroundImage: "linear-gradient(90deg, rgba(9, 9, 11, 0.05) 0%, rgba(9, 9, 11, 0.05) 100%), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)" }}>
      <Frame103 />
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 36">
              <path d="M0.5 0V36" id="Vector 1" stroke="var(--stroke-0, #09090B)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <Frame104 />
      <div className="flex flex-row items-center self-stretch">
        <div className="h-full relative shrink-0 w-0">
          <div className="absolute inset-[0_-0.5px]" style={{ "--stroke-0": "rgba(9, 9, 11, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1 36">
              <path d="M0.5 0V36" id="Vector 1" stroke="var(--stroke-0, #09090B)" strokeOpacity="0.1" />
            </svg>
          </div>
        </div>
      </div>
      <Button17 />
    </div>
  );
}

function Preview() {
  return (
    <div className="absolute content-stretch flex gap-[8px] inset-0 items-start justify-center overflow-x-clip overflow-y-auto rounded-[24px]" data-name=".preview">
      <LaunchUiDarkModeUltraviolet />
      <PreviewNav />
    </div>
  );
}

export default function Ultraviolet() {
  return (
    <div className="relative size-full" data-name="ultraviolet">
      <Preview />
    </div>
  );
}