<script>
  export let size = "1em";
  export let width = size;
  export let height = size;
  export let color = "currentColor";
  export let viewBox = "0 0 24 24";
  export let ariaLabel = void 0;
  export let ariaHidden = void 0;
  export let title = void 0;
  export let desc = void 0;

  let className = void 0;
  export { className as class }
</script>

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7,3V5H17V3H7M9,7V9H15V7H9M2,7.96V16.04L6.03,12L2,7.96M22.03,7.96L18,12L22.03,16.04V7.96M7,11V13H17V11H7M9,15V17H15V15H9M7,19V21H17V19H7Z" fill="{color}"/></svg>