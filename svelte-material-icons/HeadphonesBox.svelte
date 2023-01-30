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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7.2,18C6.54,18 6,17.46 6,16.8V13.2L6,12A6,6 0 0,1 12,6A6,6 0 0,1 18,12V13.2L18,16.8A1.2,1.2 0 0,1 16.8,18H14V14H16V12A4,4 0 0,0 12,8A4,4 0 0,0 8,12V14H10V18M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3Z" fill="{color}"/></svg>