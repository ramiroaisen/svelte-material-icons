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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20,7H4A2,2 0 0,0 2,9V15A2,2 0 0,0 4,17H5V18C5,18.6 5.4,19 6,19H8C8.6,19 9,18.6 9,18V17H15V18C15,18.6 15.4,19 16,19H18C18.6,19 19,18.6 19,18V17H20A2,2 0 0,0 22,15V9A2,2 0 0,0 20,7M14,12H4V10H14V12M18,13A2,2 0 0,1 16,11A2,2 0 0,1 18,9A2,2 0 0,1 20,11A2,2 0 0,1 18,13M6,15H4V14H6V15M10,15H8V14H10V15M14,15H12V14H14V15Z" fill="{color}"/></svg>