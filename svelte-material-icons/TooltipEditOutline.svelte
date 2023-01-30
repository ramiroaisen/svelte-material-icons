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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M4 2H20C21.11 2 22 2.9 22 4V16C22 17.11 21.11 18 20 18H16L12 22L8 18H4C2.9 18 2 17.11 2 16V4C2 2.9 2.9 2 4 2M4 4V16H8.83L12 19.17L15.17 16H20V4H4M15.84 8.2L14.83 9.21L12.76 7.18L13.77 6.16C13.97 5.95 14.31 5.94 14.55 6.16L15.84 7.41C16.05 7.62 16.06 7.96 15.84 8.2M8 11.91L12.17 7.72L14.24 9.8L10.08 14H8V11.91Z" fill="{color}"/></svg>