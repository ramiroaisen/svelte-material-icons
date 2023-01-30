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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 3C1.89 3 1 3.89 1 5V19C1 20.11 1.9 21 3 21H17C18.11 21 19 20.11 19 19V9L13 3H3M12 10V4.5L17.5 10H12M23 7V13H21V7H23M21 15H23V17H21V15Z" fill="{color}"/></svg>