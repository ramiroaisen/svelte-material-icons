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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M3 5V21H19V23H3C1.9 23 1 22.11 1 21V5H3M16 13H18V7H16V13M21 1H7C5.9 1 5 1.9 5 3V17C5 18.11 5.9 19 7 19H21C22.11 19 23 18.11 23 17V3C23 1.9 22.11 1 21 1M12 15H10V7H8V5H12V15M20 13C20 14.11 19.11 15 18 15H16C14.9 15 14 14.11 14 13V7C14 5.9 14.9 5 16 5H18C19.11 5 20 5.9 20 7V13Z" fill="{color}"/></svg>