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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M11.24,6H19V8H12.76L10,18H8L6.25,12H5V10H7.75L9,14.28L11.24,6V6M14,10.59L15.79,12.38L17.59,10.59L19,12L17.21,13.79L19,15.59L17.59,17L15.79,15.21L14,17L12.59,15.59L14.38,13.79L12.59,12L14,10.59Z" fill="{color}"/></svg>