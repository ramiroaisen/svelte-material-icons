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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,2C8.78,2 9.67,4.16 8.42,5.42C7.16,6.67 5,5.78 5,4A2,2 0 0,1 7,2M5.5,7H8.5A2,2 0 0,1 10.5,9V14.5H9V22H5V14.5H3.5V9A2,2 0 0,1 5.5,7M21,8H15V10H21M21,11H18V13H21M21,2H15V4H21M21,5H18V7H21M21,14H15V16H21M21,20H15V22H21M21,17H18V19H21" fill="{color}"/></svg>