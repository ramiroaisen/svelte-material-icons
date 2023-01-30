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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M13,5.83L14.88,7.71L13.28,9.31L14.69,10.72L17.71,7.7L12,2H11V7.03L13,9.03M5.41,4L4,5.41L10.59,12L5,17.59L6.41,19L11,14.41V22H12L16.29,17.71L18.59,20L20,18.59M13,18.17V14.41L14.88,16.29" fill="{color}"/></svg>