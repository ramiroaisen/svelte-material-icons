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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 16.54L19.37 10.8L21 12.07L12 19.07L3 12.07L4.62 10.81L12 16.54M12 14L3 7L12 0L21 7L12 14M12 2.53L6.26 7L12 11.47L17.74 7L12 2.53M12 21.47L19.37 15.73L21 17L12 24L3 17L4.62 15.74L12 21.47" fill="{color}"/></svg>