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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2M16.1 17C15.91 17 15.76 16.9 15.55 16.73L10.39 12.56L8.66 16.9H7.17L11.54 6.39C11.65 6.11 11.89 5.97 12.17 5.97C12.45 5.97 12.67 6.11 12.79 6.39L16.77 15.97C16.81 16.08 16.84 16.19 16.84 16.26C16.83 16.68 16.5 17 16.1 17M12.17 8.11L14.76 14.5L10.85 11.42L12.17 8.11Z" fill="{color}"/></svg>