<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = undefined;
  export let ariaHidden = false;
  export let title = null;
  export let desc = null;

  let className = undefined;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7.17 7.91L8.9 8.91L12.08 3.42L14.33 7.31L11.73 8.81L17.19 10.27L18.66 4.81L16.06 6.31L13.81 2.41C13.26 1.45 12.03 1.12 11.08 1.68C10.81 1.83 10.58 2.05 10.41 2.31M10 20V18L3.66 18L5.9 14.1L8.5 15.6L7.04 10.14L1.57 11.6L4.17 13.1L1.92 17C1.37 17.96 1.7 19.18 2.65 19.73C2.92 19.89 3.22 19.97 3.54 20M19.06 11.5L17.32 12.5L20.5 18H16V15L12 19L16 23V20H20.5C21.61 20 22.5 19.11 22.5 18C22.5 17.69 22.42 17.38 22.28 17.11Z" fill="{color}"/></svg>