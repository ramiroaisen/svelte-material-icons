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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6,1L3,4L6,7V5H9V7L12,4L9,1V3H6V1M11,8A1,1 0 0,0 10,9V19L6.8,17.28H6.58C6.3,17.28 6.03,17.39 5.84,17.6L5.1,18.37L10,22.57C10.26,22.85 10.62,23 11,23H17.5A1.5,1.5 0 0,0 19,21.5V17.14C19,16.56 18.68,16.03 18.15,15.79L13.21,13.6L12,13.47V9A1,1 0 0,0 11,8Z" fill="{color}"/></svg>