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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12.5,11A1.5,1.5 0 0,0 11,12.5A1.5,1.5 0 0,0 12.5,14A1.5,1.5 0 0,0 14,12.5A1.5,1.5 0 0,0 12.5,11M12,5A2,2 0 0,0 10,7A2,2 0 0,0 12,9A2,2 0 0,0 14,7A2,2 0 0,0 12,5M5.93,8.5C5.38,9.45 5.71,10.67 6.66,11.22C7.62,11.78 8.84,11.45 9.4,10.5C9.95,9.53 9.62,8.31 8.66,7.76C7.71,7.21 6.5,7.53 5.93,8.5Z" fill="{color}"/></svg>