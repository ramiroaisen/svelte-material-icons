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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,3.5L6,9.5V11H18V9.5L12,3.5M12,6.33L14.67,9H9.33L12,6.33M6,13V14.5L12,20.5L18,14.5V13H6M9.33,15H14.67L12,17.67L9.33,15Z" fill="{color}"/></svg>