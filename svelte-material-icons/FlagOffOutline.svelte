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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22.11 21.46L2.39 1.73L1.11 3L5 6.89V21H7V14H12.11L12.72 14.61L13 16H14.11L20.84 22.73L22.11 21.46M7 12V8.89L10.11 12H7M9.2 6L7.2 4H14L14.4 6H20V16H19.2L17.2 14H18V8H12.76L12.36 6H9.2Z" fill="{color}"/></svg>