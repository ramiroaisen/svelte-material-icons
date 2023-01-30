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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M22,2V12H20V5.41L10.41,15L12.71,17.29L11.29,18.71L9,16.41L3.71,21.71L2.29,20.29L7.59,15L5.29,12.71L6.71,11.29L9,13.59L18.59,4H12V2H22Z" fill="{color}"/></svg>