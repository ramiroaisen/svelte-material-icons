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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M2 4H18V7H2V4M7.5 11H12.5C12.78 11 13 11.22 13 11.5V13H7V11.5C7 11.22 7.22 11 7.5 11M20 13V7H22V13H20M20 17V15H22V17H20M3 8H5V18H15V8H17V20H3V8Z" fill="{color}"/></svg>