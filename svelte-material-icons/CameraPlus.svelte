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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 4V1H5V4H8V6H5V9H3V6H0V4M6 10V7H9V4H16L17.8 6H21C22.1 6 23 6.9 23 8V20C23 21.1 22.1 22 21 22H5C3.9 22 3 21.1 3 20V10M13 19C17.45 19 19.69 13.62 16.54 10.46C13.39 7.31 8 9.55 8 14C8 16.76 10.24 19 13 19M9.8 14C9.8 16.85 13.25 18.28 15.26 16.26C17.28 14.25 15.85 10.8 13 10.8C11.24 10.8 9.8 12.24 9.8 14Z" fill="{color}"/></svg>