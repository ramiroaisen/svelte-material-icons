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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 21L18.8 22.77C19.3 23.27 20 22.87 20 22.28V18L22.8 14.6C23.3 13.9 22.8 13 22 13H15C14.2 13 13.7 14 14.2 14.6L17 18V21M15 20H2V17C2 14.3 7.3 13 10 13C10.6 13 11.3 13.1 12.1 13.2C11.9 13.8 12 14.5 12.2 15.1C11.5 15 10.7 14.9 10 14.9C7 14.9 3.9 16.4 3.9 17V18.1H14.5L15 18.7V20M10 4C7.8 4 6 5.8 6 8S7.8 12 10 12 14 10.2 14 8 12.2 4 10 4M10 10C8.9 10 8 9.1 8 8S8.9 6 10 6 12 6.9 12 8 11.1 10 10 10Z" fill="{color}"/></svg>