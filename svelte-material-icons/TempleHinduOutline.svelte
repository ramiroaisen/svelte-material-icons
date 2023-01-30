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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M20 11V13H18L15 3V1H13V3H11V1H9V3.1L6 13H4V11H2V22H11V17H13V22H22V11H20M15.3 11H8.7L9.3 9H14.7L15.3 11M14.1 7H9.9L10.5 5H13.5L14.1 7M20 20H15V15H9V20H4V15H7.5L8.1 13H15.9L16.5 15H20V20Z" fill="{color}"/></svg>