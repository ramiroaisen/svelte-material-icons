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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 12V13.5L14 18.25V16.15L11.8 15.25V10.25L14 9.35V7.25L3 12M10 14.62L5 12.75L10 10.88V14.62M18 4.25L15 7.25H17V19.75H19V7.25H21L18 4.25Z" fill="{color}"/></svg>