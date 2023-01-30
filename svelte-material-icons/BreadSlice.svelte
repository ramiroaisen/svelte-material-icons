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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M12,2C17.5,2 22,5.36 22,9.5C22,11.19 21.26,12.75 20,14V22H4V14C2.74,12.75 2,11.19 2,9.5C2,5.36 6.5,2 12,2M8,18H12V14H8V18Z" fill="{color}"/></svg>