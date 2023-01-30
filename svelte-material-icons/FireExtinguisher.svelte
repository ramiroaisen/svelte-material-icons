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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10.5,7H11.75L12,5H10.25L6,7.5V9H4V6.5L10,3H12V2H14V3H16L17,2.5V5.5L16,5H14L14.25,7H15.5A1.5,1.5 0 0,1 17,8.5V22H9V8.5A1.5,1.5 0 0,1 10.5,7Z" fill="{color}"/></svg>