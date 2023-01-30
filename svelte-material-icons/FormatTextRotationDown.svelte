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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M6,19.73L3,16.73H5V4.27H7V16.73H9L6,19.73M14,9.38V13.13L19.03,11.25L14,9.38M21,12L10,16.73V14.67L12.19,13.73V8.77L10,7.83V5.77L21,10.5V12Z" fill="{color}"/></svg>