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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,9H6V3H8L11.42,9H16V3H18V9H20V11H18V13H20V15H18V21H16L12.57,15H8V21H6V15H4V13H6V11H4V9M8,9H9.13L8,7.03V9M8,11V13H11.42L10.28,11H8M16,17V15H14.85L16,17M12.56,11L13.71,13H16V11H12.56Z" fill="{color}"/></svg>