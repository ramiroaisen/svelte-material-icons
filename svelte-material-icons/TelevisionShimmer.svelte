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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M21 17H3V5H21M21 3H3C1.9 3 1 3.9 1 5V17C1 18.11 1.9 19 3 19H8V21H16V19H21C22.11 19 23 18.11 23 17V5C23 3.9 22.11 3 21 3M15 6.5L14.38 7.87L13 8.5L14.38 9.13L15 10.5L15.63 9.13L17 8.5L15.63 7.87L15 6.5M10.5 8.5L9.41 10.91L7 12L9.41 13.09L10.5 15.5L11.6 13.09L14 12L11.6 10.91L10.5 8.5" fill="{color}"/></svg>