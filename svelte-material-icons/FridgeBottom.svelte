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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,2A2,2 0 0,0 5,4V19A2,2 0 0,0 7,21V22H9V21H15V22H17V21A2,2 0 0,0 19,19V4A2,2 0 0,0 17,2H7M8,6H10V8H8V6M7,11H17V19H7V11M8,12V15H10V12H8Z" fill="{color}"/></svg>