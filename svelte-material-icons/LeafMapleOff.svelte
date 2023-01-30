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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18.11 14.91L8.2 5H10L12 2L14 5H16L14.37 9.9L17.79 6L18.79 7.73L22.39 7.96L20.79 11.19L21.79 13L18.11 14.91M2.39 1.73L1.11 3L5.45 7.34L5.21 7.77L1.61 8L3.21 11.27L2.21 13L8 16L7 18L11 17.25V21H13V17.25L15.91 17.8L20.84 22.73L22.11 21.46L2.39 1.73Z" fill="{color}"/></svg>