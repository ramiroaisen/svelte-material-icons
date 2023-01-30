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

<svg viewBox="{viewBox}" width="{width}" height="{height}" class="{className}" aria-label="{ariaLabel}" aria-hidden="{ariaHidden}">{#if desc}<desc>{desc}</desc>{/if}{#if title}<title>{title}</title>{/if}<path d="M10 3C5.58 3 2 4.79 2 7V17C2 19.21 5.59 21 10 21S18 19.21 18 17V7C18 4.79 14.42 3 10 3M16 17C16 17.5 13.87 19 10 19S4 17.5 4 17V14.77C5.61 15.55 7.72 16 10 16S14.39 15.55 16 14.77V17M16 12.45C14.7 13.4 12.42 14 10 14S5.3 13.4 4 12.45V9.64C5.47 10.47 7.61 11 10 11S14.53 10.47 16 9.64V12.45M10 9C6.13 9 4 7.5 4 7S6.13 5 10 5 16 6.5 16 7 13.87 9 10 9M22 7V13H20V7H22M20 15H22V17H20V15Z" fill="{color}"/></svg>