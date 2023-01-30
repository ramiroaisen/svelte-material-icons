<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8,8V6H10V8H8M7,2H17A2,2 0 0,1 19,4V19A2,2 0 0,1 17,21V22H15V21H9V22H7V21A2,2 0 0,1 5,19V4A2,2 0 0,1 7,2M7,4V9H17V4H7M8,12V15H10V12H8Z" fill="{color}"/></svg>