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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M19,7H11V13H19V7M17,11H13V9H17V11M21,3H3A2,2 0 0,0 1,5V19C1,20.11 1.9,21 3,21H21A2,2 0 0,0 23,19V5C23,3.91 22.1,3 21,3M21,19H3V5H21V19Z" fill="{color}"/></svg>