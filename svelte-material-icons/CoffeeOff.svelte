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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3.27 2L22 20.72L20.72 22L19.73 21H2V19H17.73L15.44 16.71C15 16.89 14.5 17 14 17H8C5.79 17 4 15.21 4 13V5.27L2 3.27L3.27 2M22 5V8C22 9.1 21.1 10 20 10H18V13C18 13.36 17.94 13.7 17.85 14.04L6.81 3H20C21.1 3 22 3.89 22 5M20 5H18V8H20V5Z" fill="{color}"/></svg>