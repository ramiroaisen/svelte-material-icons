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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M14.71,7.71L10.41,12L14.71,16.29L9,22H8V14.41L3.41,19L2,17.59L7.59,12L2,6.41L3.41,5L8,9.59V2H9L14.71,7.71M10,5.83V9.59L11.88,7.71L10,5.83M11.88,16.29L10,14.41V18.17L11.88,16.29M22,8H20V11H18V8H16L19,4L22,8M22,16L19,20L16,16H18V13H20V16H22Z" fill="{color}"/></svg>