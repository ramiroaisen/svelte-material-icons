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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 16L22 19L20 20L19 22L16 19V17.06L12 13.06L8 17.06V19L5 22L4 20L2 19L5 16H6.94L10.94 12L4.97 6.03L4 7L2 2L7 4L6.03 4.97L12 10.94L17.97 4.97L17 4L22 2L20 7L19.03 6.03L13.06 12L17.06 16H19Z" fill="{color}"/></svg>