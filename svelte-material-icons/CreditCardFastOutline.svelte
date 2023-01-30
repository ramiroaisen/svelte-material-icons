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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 8C2.45 8 2 7.55 2 7S2.45 6 3 6H5.54C5.19 6.6 5 7.29 5 8H3M5 13H2C1.45 13 1 12.55 1 12S1.45 11 2 11H5V13M1 18C.448 18 0 17.55 0 17S.448 16 1 16H5C5 16.71 5.19 17.4 5.54 18H1M21 6H9C7.89 6 7 6.89 7 8V16C7 17.11 7.89 18 9 18H21C22.11 18 23 17.11 23 16V8C23 6.89 22.11 6 21 6M21 8V9H9V8H21M9 16L9 12H21L21 16L9 16Z" fill="{color}"/></svg>