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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M17 9H8V7H17V9M7 7H5V9H7V7M7 4H5V6H7V4M10 4H8V6H10V4M13 17V19H14C14.55 19 15 19.45 15 20H22V22H15C15 22.55 14.55 23 14 23H10C9.45 23 9 22.55 9 22H2V20H9C9 19.45 9.45 19 10 19H11V17H4C2.89 17 2 16.11 2 15L2 3C2 1.89 2.9 1 4 1H20C21.11 1 22 1.89 22 3L22 15C22 16.11 21.11 17 20 17H13M20 15V3H4V15L20 15M11 6H19V4H11V6M5 12H11V10H5V12M13 14H19V12H13V14Z" fill="{color}"/></svg>