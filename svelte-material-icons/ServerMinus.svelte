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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4,4H20A1,1 0 0,1 21,5V9A1,1 0 0,1 20,10H4A1,1 0 0,1 3,9V5A1,1 0 0,1 4,4M9,8H10V6H9V8M5,6V8H7V6H5M8,16H16V18H8V16Z" fill="{color}"/></svg>