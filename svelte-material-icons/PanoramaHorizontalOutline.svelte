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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21.43,4C21.33,4 21.23,4 21.12,4.06C18.18,5.16 15.09,5.7 12,5.7C8.91,5.7 5.82,5.15 2.88,4.06C2.77,4 2.66,4 2.57,4C2.23,4 2,4.23 2,4.63V19.38C2,19.77 2.23,20 2.57,20C2.67,20 2.77,20 2.88,19.94C5.82,18.84 8.91,18.3 12,18.3C15.09,18.3 18.18,18.85 21.12,19.94C21.23,20 21.33,20 21.43,20C21.76,20 22,19.77 22,19.37V4.63C22,4.23 21.76,4 21.43,4M20,6.54V17.45C17.4,16.68 14.72,16.29 12,16.29C9.28,16.29 6.6,16.68 4,17.45V6.54C6.6,7.31 9.28,7.7 12,7.7C14.72,7.71 17.4,7.32 20,6.54Z" fill="{color}"/></svg>