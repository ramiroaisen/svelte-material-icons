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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M15.94 10.28C15.66 7.87 14 6 12 6S8.34 7.87 8.06 10.28C4.5 10.82 2 12.06 2 13.5C2 15.43 6.5 17 12 17S22 15.43 22 13.5C22 12.06 19.5 10.82 15.94 10.28Z" fill="{color}"/></svg>