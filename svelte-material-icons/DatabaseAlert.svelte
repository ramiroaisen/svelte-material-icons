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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M18 7C18 9.21 14.42 11 10 11S2 9.21 2 7 5.58 3 10 3 18 4.79 18 7M10 18C5.58 18 2 16.21 2 14V17C2 19.21 5.58 21 10 21S18 19.21 18 17V14C18 16.21 14.42 18 10 18M10 13C5.58 13 2 11.21 2 9V12C2 14.21 5.58 16 10 16S18 14.21 18 12V9C18 11.21 14.42 13 10 13M20 17H22V15H20V17M20 7V13H22V7H20Z" fill="{color}"/></svg>