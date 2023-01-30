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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15 15H11V13H15V15M18 12V19H2V12C2 10.9 2.9 10 4 10H5V4H15V10H16C17.11 10 18 10.9 18 12M7 10H13V6H7V10M16 12H4V17H16V12M20 17H22V15H20V17M20 7V13H22V7H20Z" fill="{color}"/></svg>