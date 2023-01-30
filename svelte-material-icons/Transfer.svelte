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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M8 4A2 2 0 0 0 6 6V10H8V6H16V9H13.5L17 12.5L20.5 9H18V6A2 2 0 0 0 16 4H8M3 12V14H11V12H3M3 15V17H11V15H3M13 15V17H21V15H13M3 18V20H11V18H3M13 18V20H21V18H13Z" fill="{color}"/></svg>