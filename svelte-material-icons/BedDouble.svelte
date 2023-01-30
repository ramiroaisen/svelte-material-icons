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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 10V7A2 2 0 0 0 16 5H8A2 2 0 0 0 6 7V10A2 2 0 0 0 4 12V17H5.33L6 19H7L7.67 17H16.33L17 19H18L18.67 17H20V12A2 2 0 0 0 18 10M11 10H8V7H11M16 10H13V7H16Z" fill="{color}"/></svg>