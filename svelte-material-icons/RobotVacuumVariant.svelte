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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,3A2,2 0 0,0 3,5V7H5V5H19V7H21V5A2,2 0 0,0 19,3H5M8,7V9H16V7H8M3,9V12A9,9 0 0,0 12,21A9,9 0 0,0 21,12V9H19V12A7,7 0 0,1 12,19A7,7 0 0,1 5,12V9H3M12,12A2.5,2.5 0 0,0 9.5,14.5A2.5,2.5 0 0,0 12,17A2.5,2.5 0 0,0 14.5,14.5A2.5,2.5 0 0,0 12,12Z" fill="{color}"/></svg>