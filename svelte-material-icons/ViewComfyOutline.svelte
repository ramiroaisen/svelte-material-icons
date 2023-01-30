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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 5V19H22V5H3M20 9H17.75V7H20V9M9.25 11H11.5V13H9.25V11M7.25 13H5V11H7.25V13M11.5 9H9.25V7H11.5V9M13.5 7H15.75V9H13.5V7M11.5 15V17H9.25V15H11.5M13.5 15H15.75V17H13.5V15M13.5 13V11H15.75V13H13.5M17.75 11H20V13H17.75V11M7.25 7V9H5V7H7.25M5 15H7.25V17H5V15M17.75 17V15H20V17H17.75Z" fill="{color}"/></svg>