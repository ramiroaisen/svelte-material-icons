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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17.8 21.2L15 18.2L16.2 17L17.8 18.6L21.4 15L22.6 16.4L17.8 21.2M13 10H10V17H12.1C12.2 16.2 12.6 15.4 13 14.7V10M16 10V12.3C16.6 12.1 17.3 12 18 12C18.3 12 18.7 12 19 12.1V10H16M12.1 19H2V22H13.5C12.8 21.2 12.3 20.1 12.1 19M21 6L11.5 1L2 6V8H21V6M7 17V10H4V17H7Z" fill="{color}"/></svg>