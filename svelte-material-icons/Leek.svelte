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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10 2V5.55L12 7.55L14 5.55V2H10M6.34 4L3.87 6.5L15 17.62V12.67L6.34 4M17.66 4L13.06 8.61L15.54 11.09L20.13 6.5L17.66 4M9 13.74V20A2 2 0 0 0 11 22H13A2 2 0 0 0 15 20V19.74L13 17.74V20H11V15.74L9 13.74Z" fill="{color}"/></svg>