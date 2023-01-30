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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 2H17V8H19V13H16.5L13 17H11L7.5 13H5V8H7V2M10 22H2V20H10C10.6 20 11 19.5 11 19V18H13V19C13 20.7 11.7 22 10 22M21 13V7H23V13H21M21 17V15H23V17H21Z" fill="{color}"/></svg>