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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 3.97C7.59 3.97 3.97 7.59 3.97 12C3.97 16.41 7.59 20.03 12 20.03C16.41 20.03 20.03 16.41 20.03 12C20.03 7.59 16.41 3.97 12 3.97M12 2C17.54 2 22 6.46 22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12C2 6.46 6.46 2 12 2M13.88 11.53L16 13.64V8H10.36L12.47 10.12L7.5 15.1L8.9 16.5" fill="{color}"/></svg>