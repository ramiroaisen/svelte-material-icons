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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M11.03 20H4C2.9 20 2 19.1 2 18L2 6C2 4.9 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22V13.05C20.85 11.22 18.82 10 16.5 10C12.92 10 10 12.92 10 16.5C10 17.79 10.38 19 11.03 20M23.39 22L22 23.39L18.88 20.32C18.19 20.75 17.37 21 16.5 21C14 21 12 19 12 16.5S14 12 16.5 12 21 14 21 16.5C21 17.38 20.75 18.21 20.31 18.9L23.39 22M19 16.5C19 15.12 17.88 14 16.5 14S14 15.12 14 16.5 15.12 19 16.5 19 19 17.88 19 16.5Z" fill="{color}"/></svg>