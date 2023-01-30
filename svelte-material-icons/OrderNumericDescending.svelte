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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M7 11H3V9H7V8H5C3.9 8 3 7.11 3 6V5C3 3.9 3.9 3 5 3H7C8.11 3 9 3.9 9 5V9C9 10.11 8.11 11 7 11M7 5H5V6H7M5 13H7C8.11 13 9 13.9 9 15V19C9 20.11 8.11 21 7 21H5C3.9 21 3 20.11 3 19V15C3 13.9 3.9 13 5 13M5 19H7V15H5M12 5H22V7H12M12 19V17H22V19M12 11H22V13H12Z" fill="{color}"/></svg>