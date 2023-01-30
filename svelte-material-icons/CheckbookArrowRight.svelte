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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M5 14H15.53C15.25 14.31 15 14.64 14.8 15H5V14M21 8V12.08C21.72 12.2 22.39 12.45 23 12.8V5H1V19H14.08C14.03 18.68 14 18.34 14 18C14 17.66 14.03 17.33 14.08 17H3V8H21M5 10H12V12H5V10M24 18L21 15V17H17V19H21V21L24 18Z" fill="{color}"/></svg>