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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 3H15V5H3V3M2 21H16V6H2V21M5 12H7.5V9.5H10.5V12H13V15H10.5V17.5H7.5V15H5V12M20 6C18.3 6 17 7.8 17 10C17 11.8 17.8 13.2 19 13.8V21H21V13.8C22.2 13.3 23 11.8 23 10C23 7.8 21.7 6 20 6Z" fill="{color}"/></svg>