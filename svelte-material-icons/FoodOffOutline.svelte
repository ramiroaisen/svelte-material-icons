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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M1 21H16V22C16 22.54 15.56 23 15 23H2C1.45 23 1 22.54 1 22V21M20.5 23.31L16 18.83V19H1V17H14.17L12.17 15H1C1 11.76 3.46 9.83 6.38 9.21L.68 3.5L2.1 2.1L13 13L15 15L21.9 21.9L20.5 23.31M10.17 13L8.17 11C6.75 11.06 4.65 11.56 3.62 13H10.17M23 5H18V1H16V5H11L11.23 7H20.79L19.79 16.97L21.62 18.8L23 5Z" fill="{color}"/></svg>