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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 3.64L9.24 10.88L2.81 17.31C1.74 18.38 1.74 20.12 2.81 21.2C3.88 22.27 5.62 22.27 6.7 21.2L13.13 14.77L20.73 22.37L22 21.1L3.27 2.37L2 3.64M10.23 11.86L12.14 13.77C11.89 14.14 11.47 14.38 11 14.38C10.24 14.38 9.62 13.76 9.62 13C9.62 12.53 9.86 12.11 10.23 11.86M14.46 11L13 9.55L13.47 9.47L19.47 3.47L22 2L20.54 4.54L14.54 10.54L14.46 11Z" fill="{color}"/></svg>