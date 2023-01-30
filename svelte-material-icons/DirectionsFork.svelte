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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3,4V12.5L6,9.5L9,13C10,14 10,15 10,15V21H14V14C14,14 14,13 13.47,12C12.94,11 12,10 12,10L9,6.58L11.5,4M18,4L13.54,8.47L14,9C14,9 14.93,10 15.47,11C15.68,11.4 15.8,11.79 15.87,12.13L21,7" fill="{color}"/></svg>