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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15,3H12V5H15V21H5V5H8V3H5A2,2 0 0,0 3,5V21A2,2 0 0,0 5,23H15A2,2 0 0,0 17,21V5A2,2 0 0,0 15,3M10,7A2,2 0 0,1 12,9A2,2 0 0,1 10,11A2,2 0 0,1 8,9A2,2 0 0,1 10,7M14,15H6V14C6,12.67 8.67,12 10,12C11.33,12 14,12.67 14,14V15M14,18H6V17H14V18M10,20H6V19H10V20M11,5H9V1H11V5M19,13V7H21V13H19M19,17V15H21V17H19Z" fill="{color}"/></svg>