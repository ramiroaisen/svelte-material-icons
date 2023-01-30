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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M1,3.5L2.28,2.25L21.75,21.72L20.5,23L17.7,20.22C16.08,21.34 14.12,22 12,22A10,10 0 0,1 2,12C2,9.88 2.66,7.92 3.78,6.3L1,3.5M6,18L12.47,15L9,11.53L6,18M18,6L11.56,9L6.33,3.76C7.94,2.65 9.9,2 12,2A10,10 0 0,1 22,12C22,14.1 21.35,16.06 20.24,17.67L15,12.44L18,6Z" fill="{color}"/></svg>