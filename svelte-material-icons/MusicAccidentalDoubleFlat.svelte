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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.5 9C14.8 9 14.11 9.28 13.5 9.67V5H11.5V9.62C11.04 9.24 10.39 9 9.5 9C8.8 9 8.11 9.28 7.5 9.67V5H5.5V19C8.5 17.32 10.43 15.79 11.5 14.41V19C16.36 16.26 18.5 13.91 18.5 12C18.5 10.59 17.79 9 15.5 9M7.5 15.38V12.26C8.12 11.59 8.95 11 9.5 11C10.09 11 10.5 11.07 10.5 12C10.5 12.15 10.4 13.3 7.5 15.38M13.5 15.38V12.26C14.12 11.59 14.95 11 15.5 11C16.09 11 16.5 11.07 16.5 12C16.5 12.15 16.4 13.3 13.5 15.38Z" fill="{color}"/></svg>