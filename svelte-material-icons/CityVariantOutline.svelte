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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15,23H13V21H15V23M19,21H17V23H19V21M15,17H13V19H15V17M7,21H5V23H7V21M7,17H5V19H7V17M19,17H17V19H19V17M15,13H13V15H15V13M19,13H17V15H19V13M21,9A2,2 0 0,1 23,11V23H21V11H11V23H9V15H3V23H1V15A2,2 0 0,1 3,13H9V11A2,2 0 0,1 11,9V7A2,2 0 0,1 13,5H15V1H17V5H19A2,2 0 0,1 21,7V9M19,9V7H13V9H19Z" fill="{color}"/></svg>