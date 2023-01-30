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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4C8.27,4 5.14,6.55 4.25,10L14,19.75C17.45,18.86 20,15.73 20,12H14.75V13.5H18.2C17.71,15.54 16.24,17.19 14.31,17.94L6.06,9.69C7,7.31 9.3,5.63 12,5.63C14.13,5.63 16,6.67 17.18,8.28L18.41,7.22C16.95,5.26 14.63,4 12,4M4,12A8,8 0 0,0 12,20C12.04,20 12.09,20 4,12Z" fill="{color}"/></svg>