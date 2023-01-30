<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M16.8,2.5C16.8,1.56 17.56,0.8 18.5,0.8C19.44,0.8 20.2,1.56 20.2,2.5V3H16.8V2.5M16,9H21A1,1 0 0,0 22,8V4A1,1 0 0,0 21,3V2.5A2.5,2.5 0 0,0 18.5,0A2.5,2.5 0 0,0 16,2.5V3A1,1 0 0,0 15,4V8A1,1 0 0,0 16,9M8.47,20.5C5.2,18.94 2.86,15.76 2.5,12H1C1.5,18.16 6.66,23 12.95,23L13.61,22.97L9.8,19.15L8.47,20.5M23.25,12.77L20.68,10.2L19.27,11.61L21.5,13.83L15.83,19.5L4.5,8.17L10.17,2.5L12.27,4.61L13.68,3.2L11.23,0.75C10.64,0.16 9.69,0.16 9.11,0.75L2.75,7.11C2.16,7.7 2.16,8.65 2.75,9.23L14.77,21.25C15.36,21.84 16.31,21.84 16.89,21.25L23.25,14.89C23.84,14.3 23.84,13.35 23.25,12.77Z" fill="{color}"/></svg>