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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 6.2L8 9.39L13 6.2L8 3L3 6.2M13 6.2L18 9.39L23 6.2L18 3L13 6.2M3 12.55L8 15.74L13 12.55L8 9.35L3 12.55M18 9.35L13 12.55L18 15.74L23 12.55L18 9.35M8.03 16.8L13.04 20L18.04 16.8L13.04 13.61L8.03 16.8Z" fill="{color}"/></svg>