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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12.88,16.29L11,18.17V14.41M11,5.83L12.88,7.71L11,9.58M15.71,7.71L10,2H9V9.58L4.41,5L3,6.41L8.59,12L3,17.58L4.41,19L9,14.41V22H10L15.71,16.29L11.41,12M19.53,6.71L18.26,8C18.89,9.18 19.25,10.55 19.25,12C19.25,13.45 18.89,14.82 18.26,16L19.46,17.22C20.43,15.68 21,13.87 21,11.91C21,10 20.46,8.23 19.53,6.71M14.24,12L16.56,14.33C16.84,13.6 17,12.82 17,12C17,11.18 16.84,10.4 16.57,9.68L14.24,12Z" fill="{color}"/></svg>