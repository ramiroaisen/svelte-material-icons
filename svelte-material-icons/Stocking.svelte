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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17,2A2,2 0 0,1 19,4V7A2,2 0 0,1 17,9V17C17,17.85 16.5,18.57 15.74,18.86L9.5,21.77C8.5,22.24 7.29,21.81 6.83,20.81L6,19C5.5,18 5.95,16.8 6.95,16.34L10,14.91V9A2,2 0 0,1 8,7V4A2,2 0 0,1 10,2H17M10,4V7H17V4H10Z" fill="{color}"/></svg>