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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19,21H21V19H19M15,21H17V19H15M11,17H13V15H11M19,9H21V7H19M19,5H21V3H19M3,13H21V11H3M11,21H13V19H11M19,17H21V15H19M13,3H11V5H13M13,7H11V9H13M17,3H15V5H17M9,3H7V5H9M5,3H3V5H5M7,21H9V19H7M3,17H5V15H3M5,7H3V9H5M3,21H5V19H3V21Z" fill="{color}"/></svg>