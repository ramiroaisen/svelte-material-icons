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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.2 7L6.2 3H21V7H10.2M20 8H11.2L20 16.8V8M20 19.35V19.34L8.66 8H8.66L7.66 7H7.66L2.39 1.73L1.11 3L3 4.89V7H5.11L6.11 8H4V21H19.11L20.84 22.73L22.11 21.46L20 19.35Z" fill="{color}"/></svg>