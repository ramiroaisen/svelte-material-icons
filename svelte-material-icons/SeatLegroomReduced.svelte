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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19.97,19.2C20.15,20.16 19.42,21 18.5,21H14V18L15,14H9A3,3 0 0,1 6,11V3H12V9H17A2,2 0 0,1 19,11L17,18H18.44C19.17,18 19.83,18.5 19.97,19.2M5,12V3H3V12A5,5 0 0,0 8,17H12V15H8A3,3 0 0,1 5,12Z" fill="{color}"/></svg>