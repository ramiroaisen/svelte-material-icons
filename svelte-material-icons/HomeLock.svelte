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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,3L2,12H5V20H19V12H22L12,3M12,9A3,3 0 0,1 15,12V13H16V17H8V13H9V12A3,3 0 0,1 12,9M12,11A1,1 0 0,0 11,12V13H13V12C13,11.5 12.6,11 12,11Z" fill="{color}"/></svg>