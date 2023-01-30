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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 4H18V7H2V4M3 8H17V20H3V8M7.5 11C7.22 11 7 11.22 7 11.5V13H13V11.5C13 11.22 12.78 11 12.5 11H7.5M20 13V7H22V13H20M20 17V15H22V17H20Z" fill="{color}"/></svg>