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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 3.27L4 5.27V13C4 15.21 5.79 17 8 17H14C14.5 17 15 16.89 15.44 16.71L17.73 19H2V21H19.73L20.72 22L22 20.72L3.27 2L2 3.27M8 15C6.9 15 6 14.1 6 13V7.27L13.73 15H8M20 3H6.81L8.81 5H16V12.19L17.85 14.04C17.94 13.7 18 13.36 18 13V10H20C21.1 10 22 9.1 22 8V5C22 3.9 21.1 3 20 3M20 8H18V5H20V8Z" fill="{color}"/></svg>