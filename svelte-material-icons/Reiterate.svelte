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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.5 4A6.5 6.5 0 0 0 4 10H1L5 14L9 10H6.03A4.5 4.5 0 0 1 10.5 6A4.5 4.5 0 0 1 15 10.5A4.5 4.5 0 0 1 10.5 15H2V17H10.5A6.5 6.5 0 0 0 17 10.5A6.5 6.5 0 0 0 10.5 4M19 12V15H16.5A7.5 7.5 0 0 1 14.24 17H19V20L23 16Z" fill="{color}"/></svg>