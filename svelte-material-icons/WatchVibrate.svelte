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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3,17V7H5V17H3M19,17V7H21V17H19M22,9H24V15H22V9M0,15V9H2V15H0M17.96,11.97C17.96,13.87 17.07,15.57 15.68,16.67L14.97,20.95H9L8.27,16.67C6.88,15.57 6,13.87 6,11.97C6,10.07 6.88,8.37 8.27,7.28L9,3H14.97L15.68,7.28C17.07,8.37 17.96,10.07 17.96,11.97M7.5,11.97C7.5,14.45 9.5,16.46 11.97,16.46A4.5,4.5 0 0,0 16.46,11.97C16.46,9.5 14.45,7.5 11.97,7.5A4.47,4.47 0 0,0 7.5,11.97Z" fill="{color}"/></svg>