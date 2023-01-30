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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5,3A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3H5M6.4,6.5H17.6C18.37,6.5 19,7.12 19,7.9V16.1A1.4,1.4 0 0,1 17.6,17.5H6.4C5.63,17.5 5,16.87 5,16.1V7.9C5,7.12 5.62,6.5 6.4,6.5M6,8V10L12,14L18,10V8L12,12L6,8Z" fill="{color}"/></svg>