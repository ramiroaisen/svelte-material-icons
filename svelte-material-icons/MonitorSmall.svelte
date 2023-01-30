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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19 2H5C3.89 2 3 2.89 3 4V16C3 17.11 3.9 18 5 18H10V20H8V22H16V20H14V18H19C20.11 18 21 17.11 21 16V4C21 2.89 20.1 2 19 2M19 16H5V4H19V16Z" fill="{color}"/></svg>