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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,2H17A2,2 0 0,1 19,4V9H5V4A2,2 0 0,1 7,2M19,19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V10H19V19M8,5V7H10V5H8M8,12V15H10V12H8Z" fill="{color}"/></svg>