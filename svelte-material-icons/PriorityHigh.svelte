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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14,19H22V17H14V19M14,13.5H22V11.5H14V13.5M14,8H22V6H14V8M2,12.5C2,8.92 4.92,6 8.5,6H9V4L12,7L9,10V8H8.5C6,8 4,10 4,12.5C4,15 6,17 8.5,17H12V19H8.5C4.92,19 2,16.08 2,12.5Z" fill="{color}"/></svg>