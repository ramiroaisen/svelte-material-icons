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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 3.97C16.41 3.97 20.03 7.59 20.03 12C20.03 16.41 16.41 20.03 12 20.03C7.59 20.03 3.97 16.41 3.97 12C3.97 7.59 7.59 3.97 12 3.97M12 2C6.46 2 2 6.46 2 12C2 17.54 6.46 22 12 22C17.54 22 22 17.54 22 12C22 6.46 17.54 2 12 2M10.12 11.53L8 13.64V8H13.64L11.53 10.12L16.5 15.1L15.1 16.5" fill="{color}"/></svg>