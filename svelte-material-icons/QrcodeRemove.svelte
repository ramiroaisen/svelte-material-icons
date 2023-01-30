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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 5H7V7H5V5M1 1H11V11H1V1M3 3V9H9V3H3M5 17H7V19H5V17M1 13H11V23H1V13M3 15V21H9V15H3M13 13H17V15H19V13H23V15H19V17H23V23H19V21H15V23H13V21H15V19H13V13M21 21V19H19V21H21M19 17H17V15H15V19H19V17M15.17 1.76L13.76 3.17L16.59 6L13.76 8.83L15.17 10.24L18 7.41L20.83 10.24L22.24 8.83L19.41 6L22.24 3.17L20.83 1.76L18 4.59L15.17 1.76Z" fill="{color}"/></svg>