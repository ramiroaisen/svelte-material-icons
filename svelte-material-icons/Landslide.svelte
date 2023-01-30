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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.47 13.79L12.89 12.76L6 15.05L2 13.5V15.61L6 16.95L15.47 13.79M10.57 11.42L8 8H2V11.61L6 12.95L10.57 11.42M6 19.05L2 17.72V22H22L17.03 15.38L6 19.05M17 6V1L12 0L9 2V6L12 8L17 6M18.5 7L16 9V12L18.5 14L23 12V8L18.5 7Z" fill="{color}"/></svg>