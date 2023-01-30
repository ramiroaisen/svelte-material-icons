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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20 13.09V12C20 10.9 19.11 10 18 10H6C4.89 10 4 10.9 4 12V19H13C13 15.69 15.69 13 19 13C19.34 13 19.67 13.04 20 13.09M10 14H6V12H10V14M17 9H7V4H17V9M22 19L17 22V16L22 19Z" fill="{color}"/></svg>