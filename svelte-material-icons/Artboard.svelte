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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 9V15H7V9H17M19 3H17V6H19V3M7 3H5V6H7V3M23 7H20V9H23V7M19 7H5V17H19V7M4 7H1V9H4V7M23 15H20V17H23V15M4 15H1V17H4V15M19 18H17V21H19V18M7 18H5V21H7V18Z" fill="{color}"/></svg>