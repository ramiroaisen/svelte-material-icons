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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 5H7V7H5V5M1 1H11V11H1V1M3 3V9H9V3H3M5 17H7V19H5V17M1 13H11V23H1V13M3 15V21H9V15H3M13 13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13M21 21V19H19V21H21M19 17H17V15H15V19H19V17M17 2V5H14V7H17V10H19V7H22V5H19V2Z" fill="{color}"/></svg>